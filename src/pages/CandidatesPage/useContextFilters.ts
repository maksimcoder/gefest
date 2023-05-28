import { useState } from 'react';

import { GetCandidatesListParamsZod } from 'features/candidates';

type IPageFilters = GetCandidatesListParamsZod;

export const useContextFilters = () => {
	const [filters, setFilters] = useState<IPageFilters>({});
	const [count, setCount] = useState<number | undefined>();

	function updateFilters(filters: IPageFilters) {
		setFilters((prevState) => {
			return {
				...prevState,
				...filters,
			};
		});
	}

	function updateCount(count: number) {
		setCount(count);
	}

	return {
		filters,
		updateFilters,
		count,
		updateCount,
	};
};
