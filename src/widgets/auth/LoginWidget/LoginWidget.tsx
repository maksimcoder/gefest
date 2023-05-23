import { FC } from 'react';
import { Box, Stack, useMediaQuery } from '@chakra-ui/react';

import { LoginForm } from 'features/auth/byLogPass';
import { ColorPalette, FontNames, HammerLogo, Text } from 'shared';

import {
	brickItemSx,
	brickStackSx,
	widgetTopRightBricksSx,
	widgetFormSx,
	widgetGefestSx,
	widgetHeaderSx,
	widgetSx,
	widgetBottomLeftBricksSx,
} from './style';

const LoginWidget: FC = () => {
	const [smallerPaddings] = useMediaQuery('(max-width: 1024px)');
	return (
		<Stack sx={widgetSx(smallerPaddings)} className='login-widget'>
			<Stack sx={widgetHeaderSx} className='login-widget__header'>
				<HammerLogo rotate={50} size='small' color={ColorPalette.GRAY_5} />
				<Text color={ColorPalette.WHITE} casing='uppercase' as='h1'>
					Вход
				</Text>
				<Text color={ColorPalette.WHITE} fontWeight={300} as='h4'>
					Начните подбор персонала
				</Text>
			</Stack>
			<Stack sx={widgetFormSx} className='login-widget__form'>
				<LoginForm />
			</Stack>
			<Text
				sx={widgetGefestSx}
				fontFamily={FontNames.Heebo}
				color={ColorPalette.GRAY_5}>
				GEFEST
			</Text>
			<Box
				style={{ marginTop: 0 }}
				sx={widgetTopRightBricksSx}
				className='login-widget__bricks bricks'>
				<Box className='bricks__stack' sx={brickStackSx}>
					<Box width='69px' sx={brickItemSx} className='bricks__item' />
					<Box
						width='69px'
						bgColor={ColorPalette.BLUE_2}
						sx={brickItemSx}
						className='bricks__item'
					/>
				</Box>
				<Box
					className='bricks__stack'
					justifyContent='flex-end'
					sx={brickStackSx}>
					<Box width='69px' sx={brickItemSx} className='bricks__item' />
					<Box width='21px' sx={brickItemSx} className='bricks__item' />
				</Box>
			</Box>
			<Box
				style={{ marginTop: 0 }}
				sx={widgetBottomLeftBricksSx}
				className='login-widget__bricks bricks'>
				<Box className='bricks__stack' sx={brickStackSx}>
					<Box width='69px' sx={brickItemSx} className='bricks__item' />
					<Box width='69px' sx={brickItemSx} className='bricks__item' />
				</Box>
				<Box
					className='bricks__stack'
					justifyContent='flex-start'
					sx={brickStackSx}>
					<Box width='21px' sx={brickItemSx} className='bricks__item' />
					<Box width='69px' sx={brickItemSx} className='bricks__item' />
					<Box
						width='69px'
						bgColor={ColorPalette.BLUE_2}
						sx={brickItemSx}
						className='bricks__item'
					/>
				</Box>
			</Box>
		</Stack>
	);
};

export { LoginWidget };
