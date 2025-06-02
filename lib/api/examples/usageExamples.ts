
// Example usage of the API utilities
import { useApiQuery, useApiPaginatedQuery, useApiMutation } from '@/lib/hooks/useApi';
import { API_ENDPOINTS } from '@/lib/api/endpoints';
import { WellnessItem } from '@/lib/types/wellness';
import { SearchParams } from '@/lib/api/types';

// Example 1: Simple GET request
export function useWellnessExample() {
  return useApiQuery<WellnessItem[]>(
    ['wellness'], // Query key
    API_ENDPOINTS.wellness.list
  );
}

// Example 2: GET request with parameters
export function useWellnessDetailExample(id: string) {
  return useApiQuery<WellnessItem>(
    ['wellness', id],
    API_ENDPOINTS.wellness.detail(id),
    {
      enabled: !!id, // Only run query if id exists
    }
  );
}

// Example 3: Paginated GET request
export function useWellnessSearchExample(params: SearchParams) {
  return useApiPaginatedQuery<WellnessItem>(
    ['wellness', 'search'],
    API_ENDPOINTS.wellness.search,
    params
  );
}

// Example 4: POST request (Create)
export function useCreateWellnessExample() {
  return useApiMutation<WellnessItem, Partial<WellnessItem>>(
    API_ENDPOINTS.wellness.list,
    {
      onSuccess: (data) => {
        console.log('Wellness item created:', data);
        // Handle success (e.g., show toast, navigate)
      },
      onError: (error) => {
        console.error('Failed to create wellness item:', error);
        // Handle error (e.g., show error message)
      },
    }
  );
}

// Example 5: How to use in a component
/*
function WellnessComponent() {
  const { data: wellness, isLoading, error } = useWellnessExample();
  const createWellness = useCreateWellnessExample();

  const handleCreate = () => {
    createWellness.mutate({
      name: 'New Wellness Item',
      description: 'Description here',
      category: 'HOSPITAL',
    });
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <View>
      {wellness?.map(item => (
        <WellnessCard key={item.id} item={item} />
      ))}
      <Button onPress={handleCreate} title="Add New" />
    </View>
  );
}
*/
</pre>

// Example 6: Using with React Query features
export function useWellnessWithRefreshExample() {
  const query = useApiQuery<WellnessItem[]>(
    ['wellness'],
    API_ENDPOINTS.wellness.list,
    {
      staleTime: 30 * 1000, // Consider data stale after 30 seconds
      cacheTime: 5 * 60 * 1000, // Keep in cache for 5 minutes
    }
  );

  return {
    ...query,
    refresh: () => query.refetch(),
    isRefreshing: query.isFetching && !query.isLoading,
  };
}
