import { z } from 'zod';

export const bookingSchema = z.object({
  name: z
    .string({ required_error: 'Please enter your full name' })
    .min(2, 'Please enter your full name (minimum 2 characters)'),
  email: z.string({ required_error: 'Please enter your email' }).email('Please enter a valid email address'),
  phone: z
    .string({ required_error: 'Please enter your phone number' })
    .min(10, 'Please enter a valid phone number (minimum 10 digits)'),
  datetime: z.string({ required_error: 'Please select a booking date and time' }).refine((datetime) => {
    const selectedDateTime = new Date(datetime);
    const now = new Date();
    return selectedDateTime >= now;
  }, 'Please select a date and time that is today or in the future'),
  guests: z
    .number({ required_error: 'Please specify the number of guests' })
    .min(1, 'Please specify the number of guests (minimum 1)'),
  specialRequests: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
