import { Grid, useMediaQuery, Spinner, AbsoluteCenter } from '@chakra-ui/react';
import { SmallVacancyCard } from 'entities/vacancy';
import { ColorPalette, KanbanItem } from 'shared';
import { useVacancyDesk } from './useVacancyDesk';

export const VacancyDesk = () => {
	const [smallerSizes] = useMediaQuery('(max-width: 1500px)');
	const { kanbanElements, isLoading, isFetching } = useVacancyDesk();
	const loading = isLoading || isFetching;

	const spinnerElem = (
		<AbsoluteCenter>
			<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.400'
				color={ColorPalette.PINK_1}
				width='80px'
				height='80px'
			/>
		</AbsoluteCenter>
	);

	const content = (
		<Grid
			overflowX='auto'
			marginTop={smallerSizes ? '10px' : '20px'}
			gridAutoColumns='minmax(405px, 451px)'
			gridAutoFlow='column'
			columnGap='30px'>
			{kanbanElements}
			<KanbanItem title='Бэклог' color={ColorPalette.PURPLE_1}>
				<SmallVacancyCard
					id='124124124'
					deadLine='29.05.2023'
					title='Project Manager'
					grade='Middle'
					salaryFrom={700}
					salaryTo={1200}
					department='Департамент менеджмента'
					priority='Высокий'
					isUndeletable
				/>
			</KanbanItem>
		</Grid>
	);

	return <>{loading ? spinnerElem : content}</>;
};
