import { useGetUserMeQuery } from '@/api/user/queries';

export const useUser = () => {
  const { data, refetch } = useGetUserMeQuery();
  const user = data?.data?.user;
  return { user, refetch };
};
