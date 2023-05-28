import { z } from 'zod';
import { IApiDictionaryItem } from 'shared/api';

export interface IDictionaryItem extends Pick<IApiDictionaryItem, 'code' | 'value'> {
	parentId?: number;
}

export const DictionaryItemZod = z.object({
	code: z.number(),
	value: z.string(),
	parentId: z.string().optional(),
});

export interface ISearchQueryParams {
	[key: string]: number | string | number[] | string[] | boolean | undefined;
}

export type SearchQueryBooleanType = 'true' | 'false';

export type QueryBooleanSerializer = (value: boolean) => string;
export type QueryArraySerializer = (value: (number | string)[]) => string;

export const enum SystemRoles {
	Admin = 1,
	Employee,
	Manager,
	Recruiter,
	Customer,
}
