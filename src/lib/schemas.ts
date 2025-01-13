import { z } from 'zod';

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First Name must be at least 2 characters' })
    .max(50, { message: 'First Name is way too long' }),
  lastName: z
    .string()
    .min(2, { message: 'Last Name must be at least 2 characters' })
    .max(50, { message: 'Last Name is way too long' }),
  email: z.string().email().max(254),
  message: z
    .string()
    .min(10, { message: 'Your message must be at least 10 characters' })
    .max(1000),
  honeypot: z.string().optional(),
});
