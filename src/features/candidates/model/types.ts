import { z } from 'zod';

const GetCandidatesListParamsZod = z.object({
	first_name: z.string().optional(),
	last_name: z.string().optional(),
	middle_name: z.string().optional(),
	position_id: z.string().optional(),
	recruiter_id: z.string().optional(),
});

export type GetCandidatesListParamsZod = z.infer<typeof GetCandidatesListParamsZod>;
