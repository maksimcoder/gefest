import { FC } from 'react';
import { Box, Fade, useBoolean, useDisclosure } from '@chakra-ui/react';
import { CandidatesPageContext } from 'features/context';

import { ColorPalette } from 'shared';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { EClientRouteKeys } from 'router/routes';
import { PageHeader } from 'widgets';
import { DataOperations } from 'widgets/DataOperations/DataOperations';
import { vacanciesPageSx } from './styles';
import { FilterByDate } from 'features/filters/byDate';
import { FilterByRecruiter } from 'features/filters/vacancies/byRecruiter';
import { useContextFilters } from 'pages/CandidatesPage/useContextFilters';
import { VacancyDesk } from 'features/vacancies/VacancyDesk';

const VacanciesPage: FC = () => {
	const [isMount, setMount] = useBoolean();
	const { filters, updateFilters, count, updateCount } = useContextFilters();
	const plurals = ['вакансия', 'вакансии', 'вакансий'];
	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_6
	);

	useComponentDidMount(() => {
		changeColorOnMount();
		document.body.style.overflow = 'hidden';
		setMount.on();
		return () => {
			document.body.style.overflow = 'auto';
			refreshColorOnUnmount();
		};
	});

	return (
		<CandidatesPageContext.Provider
			value={{
				filters,
				updateFilters,
				count,
				updateCount,
			}}>
			<Box sx={vacanciesPageSx} className='page vacancies-page' as='main'>
				<Fade in={isMount}>
					<PageHeader
						pageTitleKey={EClientRouteKeys.Vacancies}
						buttonValue='Добавить вакансию'
						plurals={plurals}
					/>
					<DataOperations>
						<DataOperations.Filters>
							<FilterByDate />
							<FilterByRecruiter />
						</DataOperations.Filters>
					</DataOperations>
				</Fade>
				<VacancyDesk />
			</Box>
		</CandidatesPageContext.Provider>
	);
};

export { VacanciesPage };
