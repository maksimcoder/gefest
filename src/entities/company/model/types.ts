import { z } from 'zod';

export interface ICompanyItem {
	id: string;
	name: string;
}

export const CompanyItemZod = z.object({
	id: z.string(),
	name: z.string(),
});

export type CompanyItem = z.infer<typeof CompanyItemZod>;

export interface ICompanyDepartmentsResponse {
	departments: CompanyItem[];
}
export interface ICompanyPositionsResponse {
	positions: CompanyItem[];
}
export interface ICompanyGradesResponse {
	grades: CompanyItem[];
}
