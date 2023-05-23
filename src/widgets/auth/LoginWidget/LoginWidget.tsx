import { FC } from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';

import { LoginForm } from 'features/auth/byLogPass';
import { ColorPalette, HammerLogo, Text } from 'shared';

import { widgetForm, widgetHeader, widgetSx } from './style';

const LoginWidget: FC = () => {
	const [smallerPaddings] = useMediaQuery('(max-width: 1024px)');
	return (
		<Stack sx={widgetSx(smallerPaddings)} className='login-widget'>
			<Stack sx={widgetHeader} className='login-widget__header'>
				<HammerLogo rotate={50} size='small' color={ColorPalette.GRAY_5} />
				<Text color={ColorPalette.WHITE} casing='uppercase' as='h1'>
					Вход
				</Text>
				<Text color={ColorPalette.WHITE} fontWeight={300} as='h4'>
					Начните подбор персонала
				</Text>
			</Stack>
			<Stack sx={widgetForm} className='login-widget__form'>
				<LoginForm />
			</Stack>
		</Stack>
	);
};

export { LoginWidget };
