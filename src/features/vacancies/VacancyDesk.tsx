import {
	Grid,
	Box,
	GridItem,
	Stack,
	SystemStyleObject,
	useMediaQuery,
} from '@chakra-ui/react';
import { SmallVacancyCard } from 'entities/vacancy';
import { FC, ReactNode } from 'react';
import { ColorPalette, Text } from 'shared';

interface IKanbanItemProps {
	title: string;
	color: ColorPalette;
	smallerSizes?: boolean;
	children?: ReactNode;
}

const KanbanItem: FC<IKanbanItemProps> = ({ title, color, smallerSizes, children }) => {
	const gridItemSx: SystemStyleObject = {
		borderRadius: '20px 20px 0 0',
		backgroundColor: ColorPalette.GRAY_7,
		overflow: 'hidden',
		maxWidth: '451px',
	};
	const titleBoxSx: SystemStyleObject = {
		width: '100%',
		padding: `${smallerSizes ? '5px' : '20px'} 20px 0`,
		borderTop: `5px solid ${color}`,
		backgroundColor: ColorPalette.GRAY_7,
	};

	const ordersStackSx: SystemStyleObject = {
		padding: '0 20px 20px',
	};

	return (
		<GridItem sx={gridItemSx} className='orders'>
			<Box sx={titleBoxSx}>
				<Text fontSize='24px' marginBottom='10px' fontWeight={500} color={color}>
					{title}
				</Text>
			</Box>
			<Stack
				height='60vh'
				overflowY='scroll'
				sx={ordersStackSx}
				gap='20px'
				className='orders-stack'>
				{children}
			</Stack>
		</GridItem>
	);
};

export const VacancyDesk = () => {
	const [smallerSizes] = useMediaQuery('(max-width: 1500px)');

	return (
		<Grid
			overflowX='auto'
			marginTop={smallerSizes ? '10px' : '20px'}
			gridAutoColumns='minmax(405px, 451px)'
			gridAutoFlow='column'
			columnGap='30px'>
			<KanbanItem
				title='Заявки'
				smallerSizes={smallerSizes}
				color={ColorPalette.GREEN_4}>
				<SmallVacancyCard
					id='124124124'
					deadLine='29.05.2023'
					title='Project Manager'
					grade='Middle'
					salaryFrom={700}
					salaryTo={1200}
					department='Департамент менеджмента'
					priority='Высокий'
				/>
			</KanbanItem>
			<KanbanItem
				title='В работе'
				color={ColorPalette.ORANGE_4}
				smallerSizes={smallerSizes}>
				<SmallVacancyCard
					id='124124124'
					deadLine='29.05.2023'
					title='Project Manager'
					grade='Middle'
					salaryFrom={700}
					salaryTo={1200}
					department='Департамент менеджмента'
					priority='Высокий'
				/>
			</KanbanItem>
			<KanbanItem
				title='Завершено'
				color={ColorPalette.BLACK_1}
				smallerSizes={smallerSizes}>
				<SmallVacancyCard
					id='124124124'
					deadLine='29.05.2023'
					title='Project Manager'
					grade='Middle'
					salaryFrom={700}
					salaryTo={1200}
					department='Департамент менеджмента'
					priority='Высокий'
				/>
			</KanbanItem>
			<KanbanItem
				title='Бэклог'
				color={ColorPalette.PURPLE_1}
				smallerSizes={smallerSizes}>
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
};
