'use client';
import type { IUser } from '@/api/auth/types';
import { COOKIE_KEYS, setCookies } from '@/lib/cookie';
import { ROUTES } from '@/lib/routes';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface ISetUserData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export const useAuth = () => {
  const router = useRouter();
  const accessToken = useUserStore.use.accessToken();
  const refreshToken = useUserStore.use.refreshToken();
  const user = useUserStore.use.user();
  const status = useUserStore.use.status();

  const setAccessToken = useUserStore.use.setAccessToken();
  const setRefreshToken = useUserStore.use.setRefreshToken();
  const setUser = useUserStore.use.setUser();
  const logout = useUserStore.use.logout();

  const setUserData = async (data: ISetUserData) => {
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    setCookies(COOKIE_KEYS.ACCESS_TOKEN, data.accessToken);
    setCookies(COOKIE_KEYS.REFRESH_TOKEN, data.refreshToken);
    setUser(data.user);
  };

  const handleLogOut = useCallback(() => {
    logout();
    router.push(ROUTES.LANDING_PAGE);
  }, [logout]);

  return {
    isLoggedIn: !!accessToken && !!refreshToken && !!user && status === 'ready',
    accessToken,
    refreshToken,
    user,
    status,
    setUserData,
    logout: handleLogOut,
  };
};
