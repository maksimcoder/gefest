import { useContext } from 'react';
import { MenuItem } from '@chakra-ui/react';

import { CandidatesPageContext } from 'features/context';
import { useLazyGetCompanyPositionsQuery } from 'entities/company';

export const useFilterCandidatesByVacancy = () => {
	const { updateFilters } = useContext(CandidatesPageContext);
	const [load, { data, isLoading, isFetching }] = useLazyGetCompanyPositionsQuery();

	function handlePositionChoose(id: string) {
		updateFilters?.({ position_id: id });
	}

	const menuItems = data?.positions.map(({ id, name }) => {
		return (
			<MenuItem onClick={() => handlePositionChoose(id)} key={id}>
				{name}
			</MenuItem>
		);
	});

	return {
		menuItems,
		load,
		isLoading,
		isFetching,
	};
};
