import { FC } from 'react';
import { Box, Stack, useMediaQuery } from '@chakra-ui/react';

import { ColorPalette, HammerLogo } from 'shared';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { LoginWidget } from 'widgets';
import {
	brickItemSx,
	bricksStackSx,
	bricksSx,
	hammerBlueSx,
	hammerRedSx,
	hammerWhiteLargeSx,
	hammerWhiteMediumSx,
	loginPageSx,
} from './styles';

const LoginPage: FC = () => {
	const [smallerSizes] = useMediaQuery('(max-width: 1500px)');
	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_2_09
	);
	useComponentDidMount(() => {
		changeColorOnMount();
		return () => {
			refreshColorOnUnmount();
		};
	});

	return (
		<Stack sx={loginPageSx} className='login-page'>
			<Box className='login-page__decorations'>
				<Box sx={bricksSx} className='decorations__bricks bricks'>
					<Box sx={bricksStackSx} className='bricks__stack'>
						<Box sx={brickItemSx(smallerSizes)} className='bricks__item' />
						<Box sx={brickItemSx(smallerSizes)} className='bricks__item' />
					</Box>
					<Box
						sx={bricksStackSx}
						justifyContent='flex-end'
						className='bricks__stack'>
						<Box sx={brickItemSx(smallerSizes)} className='bricks__item' />
					</Box>
				</Box>
				<HammerLogo
					sx={hammerRedSx}
					rotate={50}
					size='large'
					color={ColorPalette.PINK_1}
				/>
				<HammerLogo
					sx={hammerBlueSx(smallerSizes)}
					rotate={230}
					size='large'
					color={ColorPalette.BLUE_1}
				/>
				<HammerLogo
					sx={hammerWhiteMediumSx}
					size='medium'
					rotate={130}
					color={ColorPalette.GRAY_1}
				/>
				<HammerLogo
					sx={hammerWhiteLargeSx(smallerSizes)}
					size='medium'
					rotate={-50}
					color={ColorPalette.GRAY_1}
				/>
			</Box>
			<LoginWidget />
		</Stack>
	);
};

export { LoginPage };
