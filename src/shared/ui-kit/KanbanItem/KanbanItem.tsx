import { ReactNode, FC } from 'react';
import { Box, SystemStyleObject, GridItem, Stack, useMediaQuery } from '@chakra-ui/react';

import { ColorPalette } from 'shared/types';
import { Text } from '../Text';

interface IKanbanItemProps {
	title: string;
	color: ColorPalette;
	sx?: SystemStyleObject;
	children?: ReactNode;
}

export const KanbanItem: FC<IKanbanItemProps> = ({ title, color, sx, children }) => {
	const [smallerSizes] = useMediaQuery('(max-width: 1500px)');
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
		<GridItem sx={{ ...gridItemSx, ...sx }} className='orders'>
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
