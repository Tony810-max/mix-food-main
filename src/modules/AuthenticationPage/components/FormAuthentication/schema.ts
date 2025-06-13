import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string({ required_error: 'Please enter your email address' }).email('Please enter a valid email address'),
  password: z.string({ required_error: 'Please enter your password' }).min(6, 'Password must be at least 6 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string({ required_error: 'Please enter your name' }).min(2, 'Name must be at least 2 characters'),
    email: z.string({ required_error: 'Please enter your email address' }).email('Please enter a valid email address'),
    phone: z
      .string({ required_error: 'Please enter your phone number' })
      .min(10, 'Please enter a valid phone number (minimum 10 digits)'),
    password: z
      .string({ required_error: 'Please enter your password' })
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string({ required_error: 'Please confirm your password' })
      .min(6, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
