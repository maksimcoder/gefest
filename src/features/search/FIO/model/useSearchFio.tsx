import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { CandidatesPageContext } from 'features/context';
import { useDebounce } from 'shared/hooks';

interface ISearchState {
	first_name?: string;
	middle_name?: string;
	last_name?: string;
}

const initialState: ISearchState = {
	first_name: '',
	middle_name: '',
	last_name: '',
};

export const useSearchFio = () => {
	const { updateFilters } = useContext(CandidatesPageContext);
	const [localSearchFilters, setLocalSearchFilters] =
		useState<ISearchState>(initialState);
	const debouncedValue = useDebounce<ISearchState>(localSearchFilters, 500);

	function handleLocalFilterChange(e: ChangeEvent<HTMLInputElement>) {
		setLocalSearchFilters((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}

	useEffect(() => {
		updateFilters?.(localSearchFilters);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	return {
		handleLocalFilterChange,
		localSearchFilters,
	};
};
