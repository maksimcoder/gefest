import { FC } from 'react';
import {
	useBoolean,
	Stack,
	CloseButton,
	Box,
	Fade,
	Badge,
	Flex,
	Avatar,
} from '@chakra-ui/react';
import { ColorPalette, Text } from 'shared';
import { useComponentDidMount } from 'shared/hooks';
import { boxSx, closeButtonSx } from './styles';
import { isDefined } from 'shared/utils';

interface ISmallVacancyProps {
	id: string;
	deadLine?: string;
	title?: string;
	grade?: string;
	salaryFrom?: number;
	salaryTo?: number;
	department?: string;
	priority?: string;
	isUndeletable?: boolean;
	onCrossClick?: (id?: string) => void;
}

export const SmallVacancyCard: FC<ISmallVacancyProps> = ({
	id,
	deadLine,
	title,
	grade,
	salaryFrom,
	salaryTo,
	department,
	priority,
	isUndeletable,
	onCrossClick,
}) => {
	const [isMount, setMount] = useBoolean();

	function handleCrossClick() {
		onCrossClick?.(id);
	}

	useComponentDidMount(() => {
		setMount.on();
	});

	function getPriorityColor(priority: string) {
		switch (priority) {
			case 'Высокий':
				return 'red';
			case 'Средний':
				return 'orange';
			case 'Низкий':
				return 'green';
			default:
				return 'orange';
		}
	}

	return (
		<Fade in={isMount}>
			<Flex
				direction='column'
				justifyContent='space-between'
				sx={boxSx}
				className='vacancy'>
				<Stack maxWidth='234px' className='vacancy__content'>
					{deadLine && (
						<Text
							className='deadline'
							color={ColorPalette.BLACK_1_03}
							fontSize='16px'
							fontWeight={300}>
							Закрыть до {deadLine}
						</Text>
					)}
					{title && (
						<Text
							className='vacancy__title'
							color={ColorPalette.BLUE_1}
							fontSize='24px'
							fontWeight={400}>
							{title}
						</Text>
					)}
					{grade && (
						<Text
							className='vacancy__grade'
							color={ColorPalette.BLACK_1}
							fontSize='20px'
							fontWeight={300}>
							{grade}
						</Text>
					)}
					{salaryFrom && (
						<Text
							className='vacancy__salary'
							color={ColorPalette.BLACK_1}
							fontSize='20px'
							fontWeight={700}>
							{isDefined(salaryFrom) && ` от ${salaryFrom}`}
							{isDefined(salaryTo) && ` до ${salaryTo}`}
							{` ₽`}
						</Text>
					)}
					{/* {department && <Badge fontWeight={700} fontSize="14px" borderRadius="30px" variant="outline">{department}</Badge>} */}
					{department && (
						<Box
							width='max-content'
							border={`1px solid ${ColorPalette.GRAY_2}`}
							borderRadius='30px'
							padding='2px 10px'
							className='badge'>
							<Text
								color={ColorPalette.GRAY_2}
								fontSize='14px'
								fontWeight={700}>
								{department}
							</Text>
						</Box>
					)}
				</Stack>
				{priority && (
					<Box position='absolute' bottom='20px' left='20px'>
						<Badge colorScheme={getPriorityColor(priority)}>{priority}</Badge>
					</Box>
				)}
				<Box position='absolute' bottom='20px' right='20px'>
					<Avatar size='sm' />
				</Box>
				{isUndeletable && (
					<CloseButton
						onClick={handleCrossClick}
						color={ColorPalette.GRAY_1}
						sx={closeButtonSx}
					/>
				)}
			</Flex>
		</Fade>
	);
};
