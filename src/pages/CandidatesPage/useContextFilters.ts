import { useState } from 'react';

import { GetCandidatesListParamsZod } from 'features/candidates';

type IPageFilters = GetCandidatesListParamsZod;

export const useContextFilters = () => {
	const [filters, setFilters] = useState<IPageFilters>({});

	function updateFilters(filters: IPageFilters) {
		setFilters((prevState) => {
			return {
				...prevState,
				...filters,
			};
		});
	}

	return {
		filters,
		updateFilters,
	};
};
