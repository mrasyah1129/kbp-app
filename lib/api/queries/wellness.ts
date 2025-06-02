
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../client';
import { ENDPOINTS } from '../config';
import { WellnessResponse, WellnessLocation } from '../../types/wellness';

// Query Keys
export const wellnessKeys = {
  all: ['wellness'] as const,
  lists: () => [...wellnessKeys.all, 'list'] as const,
  list: (filters: Record<string, any>) => [...wellnessKeys.lists(), { filters }] as const,
  details: () => [...wellnessKeys.all, 'detail'] as const,
  detail: (id: string) => [...wellnessKeys.details(), id] as const,
  hospitals: () => [...wellnessKeys.all, 'hospitals'] as const,
  maternityHomes: () => [...wellnessKeys.all, 'maternity-homes'] as const,
};

// Hooks
export const useWellness = () => {
  return useQuery({
    queryKey: wellnessKeys.lists(),
    queryFn: async () => {
      const response = await apiClient.get<WellnessResponse>(ENDPOINTS.WELLNESS);
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useHospitals = () => {
  return useQuery({
    queryKey: wellnessKeys.hospitals(),
    queryFn: async () => {
      const response = await apiClient.get<WellnessLocation[]>(ENDPOINTS.HOSPITALS);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useMaternityHomes = () => {
  return useQuery({
    queryKey: wellnessKeys.maternityHomes(),
    queryFn: async () => {
      const response = await apiClient.get<WellnessLocation[]>(ENDPOINTS.MATERNITY_HOMES);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useWellnessLocation = (id: string) => {
  return useQuery({
    queryKey: wellnessKeys.detail(id),
    queryFn: async () => {
      const response = await apiClient.get<WellnessLocation>(`${ENDPOINTS.WELLNESS}/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

// Mutations (if needed)
export const useFavoriteWellness = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (locationId: string) => {
      const response = await apiClient.post(`${ENDPOINTS.WELLNESS}/${locationId}/favorite`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wellnessKeys.all });
    },
  });
};
