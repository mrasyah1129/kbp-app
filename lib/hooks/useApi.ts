
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import { ApiResponse, PaginatedResponse, ApiError } from '../api/types';

// Generic hook for GET requests
export function useApiQuery<T>(
  queryKey: (string | number)[],
  endpoint: string,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    cacheTime?: number;
  }
) {
  return useQuery<ApiResponse<T>, ApiError>({
    queryKey,
    queryFn: async () => {
      const response = await apiClient.get(endpoint);
      return response.data;
    },
    staleTime: options?.staleTime ?? 5 * 60 * 1000, // 5 minutes
    gcTime: options?.cacheTime ?? 10 * 60 * 1000, // 10 minutes
    enabled: options?.enabled,
  });
}

// Generic hook for paginated GET requests
export function useApiPaginatedQuery<T>(
  queryKey: (string | number)[],
  endpoint: string,
  params?: Record<string, any>,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    cacheTime?: number;
  }
) {
  return useQuery<PaginatedResponse<T>, ApiError>({
    queryKey: [...queryKey, params],
    queryFn: async () => {
      const response = await apiClient.get(endpoint, { params });
      return response.data;
    },
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
    gcTime: options?.cacheTime ?? 10 * 60 * 1000,
    enabled: options?.enabled,
  });
}

// Generic hook for POST requests
export function useApiMutation<TData, TVariables>(
  endpoint: string,
  options?: {
    onSuccess?: (data: ApiResponse<TData>) => void;
    onError?: (error: ApiError) => void;
  }
) {
  const queryClient = useQueryClient();
  
  return useMutation<ApiResponse<TData>, ApiError, TVariables>({
    mutationFn: async (variables) => {
      const response = await apiClient.post(endpoint, variables);
      return response.data;
    },
    onSuccess: (data) => {
      options?.onSuccess?.(data);
      // Optionally invalidate related queries
      queryClient.invalidateQueries();
    },
    onError: options?.onError,
  });
}

// Hook for file uploads
export function useFileUpload(
  endpoint: string,
  options?: {
    onSuccess?: (data: ApiResponse) => void;
    onError?: (error: ApiError) => void;
    onProgress?: (progress: number) => void;
  }
) {
  return useMutation<ApiResponse, ApiError, FormData>({
    mutationFn: async (formData) => {
      const response = await apiClient.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            options?.onProgress?.(progress);
          }
        },
      });
      return response.data;
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
}
