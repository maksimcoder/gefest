import { ChangeEvent, MouseEvent, FC } from 'react';
import { Stack, Flex, Button, Divider, Box, useMediaQuery } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { clientRouteValues, EClientRouteKeys } from 'router/routes';
import { Text, PageTitle, ColorPalette } from 'shared';
import { pageHeaderSx, interactiveRow, buttonStyle, dividerSx } from './styles';

import { SearchFio } from 'features/search/FIO';

interface IPageHeaderProps {
	pageTitleKey: EClientRouteKeys;
	onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	inputValue?: string;
	buttonValue?: string;
	onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	peopleFound?: number;
}

export const PageHeader: FC<IPageHeaderProps> = ({
	pageTitleKey,
	buttonValue,
	onButtonClick,
	peopleFound,
}) => {
	const [smallerSizes] = useMediaQuery('(max-width: 1500px)');

	return (
		<Stack sx={pageHeaderSx(smallerSizes)} as='header' className='page-header'>
			<PageTitle>{clientRouteValues[pageTitleKey]}</PageTitle>
			<Flex sx={interactiveRow} justifyContent='space-between'>
				<SearchFio />
				<Button
					sx={buttonStyle}
					onClick={onButtonClick}
					leftIcon={<AddIcon boxSize='15px' color={ColorPalette.WHITE} />}
					bg={ColorPalette.PINK_1}
					size='lg'>
					<Text color={ColorPalette.WHITE}>{buttonValue}</Text>
				</Button>
			</Flex>
			<Text
				visibility={!peopleFound ? 'visible' : 'hidden'}
				fontWeight={300}
				fontSize='18px'
				color={ColorPalette.GRAY_2}>
				Найдено {peopleFound} человека
			</Text>
			<Box paddingRight='30px' className='divider-wrapper'>
				<Divider sx={dividerSx} />
			</Box>
		</Stack>
	);
};
