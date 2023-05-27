import { createContext } from 'react';
import { z } from 'zod';
import { GetCandidatesListParamsZod } from 'features/candidates';

const pageFiltersZod = GetCandidatesListParamsZod;

const initialPageContextZod = z.object({
	filters: pageFiltersZod,
});

type InitialPageContext = z.infer<typeof initialPageContextZod>;

export const initialPageContext: InitialPageContext = {
	filters: {},
};

export const PageContext = createContext(initialPageContext);
