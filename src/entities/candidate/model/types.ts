import { z } from 'zod';
import { DictionaryItemZod } from 'shared';
import { CompanyItemZod } from 'entities/company';

const ApiCandidateZod = z.object({
	id: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	middle_name: z.string().optional(),
	birth_date: z.string().optional(),
	min_salary: z.number().optional(),
	adress: DictionaryItemZod.optional(),
	citizenship: DictionaryItemZod.optional(),
	family_status: DictionaryItemZod.optional(),
	position: CompanyItemZod.optional(),
	grade: CompanyItemZod.optional(),
});

export type ApiCandidate = z.infer<typeof ApiCandidateZod>;
