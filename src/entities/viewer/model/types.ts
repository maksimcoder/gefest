import { z } from 'zod';

const LoginMutationZod = z.object({
	username: z.string(),
	password: z.string(),
});

import { CompanyItemZod } from 'entities/company';

const ApiViewerZod = z.object({
	id: z.string(),
	username: z.string(),
	role_code: z.number(),
	company_id: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	middle_name: z.string().optional(),
	department: CompanyItemZod,
	position: CompanyItemZod,
	grade: CompanyItemZod,
	email: z.string(),
});

export type ApiViewer = z.infer<typeof ApiViewerZod>;
export type LoginMutation = z.infer<typeof LoginMutationZod>;
