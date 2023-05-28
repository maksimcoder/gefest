import { MouseEvent, FC } from 'react';
import { Stack, Flex, Button, Divider, Box, useMediaQuery } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { clientRouteValues, EClientRouteKeys } from 'router/routes';
import { Text, PageTitle, ColorPalette } from 'shared';
import { pageHeaderSx, interactiveRow, buttonStyle, dividerSx } from './styles';

import { SearchFio } from 'features/search/FIO';
import { isDefined } from 'shared/utils';

interface IPageHeaderProps {
	pageTitleKey: EClientRouteKeys;
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
	const plurals = ['результат', 'результата', 'результатов'];

	function makePlural(number?: number) {
		if (!isDefined(number)) return '';

		const lastNumber = Number(String(number)[String(number).length - 1]);

		if (lastNumber === 1) {
			return plurals[0];
		}

		if (
			[11, 12, 13, 14, 15, 16, 17, 18, 19].includes(number) ||
			[0, 5, 6, 7, 8, 9].includes(lastNumber)
		) {
			return plurals[2];
		}

		return plurals[1];
	}

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
				visibility={peopleFound ? 'visible' : 'hidden'}
				fontWeight={300}
				fontSize='18px'
				color={ColorPalette.GRAY_2}>
				Найден {peopleFound} {makePlural(peopleFound)}
			</Text>
			<Box paddingRight='30px' className='divider-wrapper'>
				<Divider sx={dividerSx} />
			</Box>
		</Stack>
	);
};
