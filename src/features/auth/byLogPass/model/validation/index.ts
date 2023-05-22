import { z } from 'zod';
import { LoginErrorMessages } from './errors';

export const loginValidationSchema = z.object({
	username: z.string().min(1, LoginErrorMessages.username_empty),
	password: z.string().min(1, LoginErrorMessages.password_empty),
});

export type LoginValidationSchema = z.infer<typeof loginValidationSchema>;
