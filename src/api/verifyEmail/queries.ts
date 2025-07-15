import { useQuery } from '@tanstack/react-query';

// demo trong request (mock data tai hien api get userx)

export const useGetUsersQuery = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: () => {},
    refetchInterval: 1000,
  });
