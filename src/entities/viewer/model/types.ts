import { z } from 'zod';

const LoginMutationZod = z.object({
	username: z.string(),
	password: z.string(),
});

const ApiViewerZod = z.object({
	username: z.string(),
	role_code: z.number(),
	company_id: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	middle_name: z.string().optional(),
	department_id: z.string().nullable(),
	position_id: z.string().nullable(),
	grade_id: z.string().nullable(),
	email: z.string(),
});

export type ApiViewer = z.infer<typeof ApiViewerZod>;
export type LoginMutation = z.infer<typeof LoginMutationZod>;
