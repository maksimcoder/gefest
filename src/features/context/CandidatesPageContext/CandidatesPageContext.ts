import { createContext } from 'react';

import { GetCandidatesListParamsZod } from 'features/candidates';

export const pageFiltersZod = GetCandidatesListParamsZod;

type IPageFilters = GetCandidatesListParamsZod;

interface IPageContext {
	filters?: IPageFilters;
	updateFilters?: (filters: IPageFilters) => void;

	count?: number;
	updateCount?: (count: number) => void;
}

export const CandidatesPageContext = createContext({} as IPageContext);
