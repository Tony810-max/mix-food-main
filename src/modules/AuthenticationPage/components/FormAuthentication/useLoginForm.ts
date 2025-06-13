import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormValues } from './schema';

export function useLoginForm() {
  return useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });
}
