import { z } from 'zod';
export const schemaProfile = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(6, 'Phone Number is required'),
  birthday: z.string().min(1, 'Birthday is required'),
  address: z.string().min(1, 'Address is required'),
  bio: z.string().min(1, 'Bio is required'),
});
