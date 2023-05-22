import { z } from 'zod';

const LoginMutationZod = z.object({
	username: z.string(),
	password: z.string(),
});

export type LoginMutation = z.infer<typeof LoginMutationZod>;
