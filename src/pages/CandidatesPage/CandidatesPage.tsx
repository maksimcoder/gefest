import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { CandidatesPageContext } from 'features/context';

import { ColorPalette } from 'shared';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { EClientRouteKeys } from 'router/routes';
import { candidatesPageSx } from './styles';
import { PageHeader } from 'widgets';
import { DataOperations } from 'widgets/DataOperations/DataOperations';
import { CandidatesList } from 'features/candidates';
import { useContextFilters } from './useContextFilters';
import { FilterByVacancy } from 'features/filters/candidates';
import { FilterByIncome } from 'features/filters/candidates/byIncome';

const CandidatesPage: FC = () => {
	const { filters, updateFilters, count, updateCount } = useContextFilters();
	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_6
	);

	useComponentDidMount(() => {
		changeColorOnMount();
		return () => {
			refreshColorOnUnmount();
		};
	});

	return (
		<Box sx={candidatesPageSx} className='page candidates-page' as='main'>
			<CandidatesPageContext.Provider
				value={{
					filters,
					updateFilters,
					count,
					updateCount,
				}}>
				<PageHeader
					pageTitleKey={EClientRouteKeys.Candidates}
					buttonValue='Добавить кандидата'
					peopleFound={count}
				/>
				<DataOperations>
					<DataOperations.Filters>
						<FilterByVacancy />
						<FilterByIncome />
					</DataOperations.Filters>
				</DataOperations>
				<CandidatesList />
			</CandidatesPageContext.Provider>
		</Box>
	);
};

export { CandidatesPage };
