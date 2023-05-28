import {
	Grid,
	useMediaQuery,
	Spinner,
	AbsoluteCenter,
	SystemStyleObject,
	Box,
	Tooltip,
} from '@chakra-ui/react';
import { SmallVacancyCard } from 'entities/vacancy';
import { ColorPalette, KanbanItem } from 'shared';
import { useVacancyDesk } from './useVacancyDesk';

export const VacancyDesk = () => {
	const [smallerSizes] = useMediaQuery('(max-width: 1500px)');
	const { kanbanElements, isLoading, isFetching } = useVacancyDesk();
	const loading = isLoading || isFetching;
	const mockKanbanItemSx: SystemStyleObject = {
		opacity: 0.5,
		userSelect: 'none',
		cursor: 'not-allowed',
	};

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
			<Tooltip label='in version 1.1'>
				<Box>
					<KanbanItem
						sx={mockKanbanItemSx}
						title='Бэклог'
						color={ColorPalette.PURPLE_1}>
						<SmallVacancyCard
							id='124124124'
							deadLine='2023-05-29'
							title='Project Manager'
							grade='Middle'
							salaryFrom={700}
							salaryTo={1200}
							department='Департамент менеджмента'
							priority='Высокий'
							isUndeletable
							sx={{
								pointerEvents: 'none',
							}}
						/>
					</KanbanItem>
				</Box>
			</Tooltip>
		</Grid>
	);

	return <>{loading ? spinnerElem : content}</>;
};
