import { FC } from 'react';
import { Box, Fade, useBoolean, useDisclosure } from '@chakra-ui/react';
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
import { AddCandidateDrawer } from 'features/drawers';
import { FilterByDate } from 'features/filters/byDate';

const CandidatesPage: FC = () => {
	const [isMount, setMount] = useBoolean();
	const { filters, updateFilters, count, updateCount } = useContextFilters();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const plurals = ['результат', 'результата', 'результатов'];

	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_6
	);

	useComponentDidMount(() => {
		changeColorOnMount();
		setMount.on();
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
				<Fade in={isMount}>
					<PageHeader
						pageTitleKey={EClientRouteKeys.Candidates}
						buttonValue='Добавить кандидата'
						onButtonClick={onOpen}
						peopleFound={count}
						plurals={plurals}
					/>
					<DataOperations>
						<DataOperations.Filters>
							<FilterByDate />
							<FilterByVacancy />
							<FilterByIncome />
						</DataOperations.Filters>
					</DataOperations>
				</Fade>
				<CandidatesList />
				<AddCandidateDrawer isOpen={isOpen} onClose={onClose} />
			</CandidatesPageContext.Provider>
		</Box>
	);
};

export { CandidatesPage };
