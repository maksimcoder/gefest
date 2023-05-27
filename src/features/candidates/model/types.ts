import { z } from 'zod';
import { ApiCandidateZod } from 'entities/candidate';

const GetCandidatesListParamsZod = z.object({
	first_name: z.string().optional(),
	last_name: z.string().optional(),
	middle_name: z.string().optional(),
	position_id: z.string().optional(),
	recruiter_id: z.string().optional(),
});

export type GetCandidatesListParamsZod = z.infer<typeof GetCandidatesListParamsZod>;

const ApiCandidateListResponseZod = z.object({
	candidates: ApiCandidateZod,
	count: z.number(),
});

export type ApiCandidateListResponse = z.infer<typeof ApiCandidateListResponseZod>;
