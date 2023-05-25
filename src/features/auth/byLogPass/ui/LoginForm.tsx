import { FC, useState } from 'react';
import {
	Stack,
	Input,
	FormControl,
	Button,
	InputRightElement,
	InputGroup,
	Checkbox,
	FormErrorMessage,
	Tooltip,
	Box,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ColorPalette, FontNames, Text } from 'shared';

import {
	loginValidationSchema,
	LoginValidationSchema,
	useLoginFormModel,
} from '../model';
import {
	inputSx,
	placeholderSx,
	buttonStackStyles,
	buttonStylesSx,
	controlsStackSx,
	forgotPasswordStyle,
} from './styles';

const INITIAL_FORM_VALUES: LoginValidationSchema = {
	username: 'admin',
	password: 'admin',
};

export const LoginForm: FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showCheckTooltip, setShowCheckTooltip] = useState(false);
	const [showPassTooltip, setShowPassTooltip] = useState(false);
	const {
		onSubmit,
		loginMutationData: { isLoading },
		isLoading: isUserLoading,
	} = useLoginFormModel();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginValidationSchema>({
		defaultValues: INITIAL_FORM_VALUES,
		resolver: zodResolver(loginValidationSchema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack className='login-form'>
				<FormControl height='64px' isInvalid={Boolean(errors.username)}>
					<Input
						sx={inputSx}
						_placeholder={placeholderSx}
						className='login-form__login'
						variant='flushed'
						placeholder='Логин'
						fontFamily={FontNames.Roboto}
						{...register('username')}
					/>
					<FormErrorMessage pl='15px' textColor={ColorPalette.PINK_1}>
						{errors.username?.message}
					</FormErrorMessage>
				</FormControl>
				<FormControl height='64px' isInvalid={Boolean(errors.password)}>
					<InputGroup>
						<Input
							_placeholder={placeholderSx}
							sx={inputSx}
							className='login-form__password'
							type={showPassword ? 'text' : 'password'}
							variant='flushed'
							placeholder='Пароль'
							fontFamily={FontNames.Roboto}
							{...register('password')}
						/>
						<InputRightElement
							paddingRight='15px'
							cursor='pointer'
							onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? (
								<ViewIcon color={ColorPalette.GRAY_3} boxSize={6} />
							) : (
								<ViewOffIcon color={ColorPalette.GRAY_3} boxSize={6} />
							)}
						</InputRightElement>
					</InputGroup>
					<FormErrorMessage pl='15px' textColor={ColorPalette.PINK_1}>
						{errors.password?.message}
					</FormErrorMessage>
				</FormControl>
				<Stack
					className='login-form__controls controls'
					style={buttonStackStyles}>
					<Button
						sx={buttonStylesSx}
						type='submit'
						variant='solid'
						isLoading={isLoading || isUserLoading}
						loadingText='Выполняется вход'
						bg={ColorPalette.GRAY_3}
						color={ColorPalette.BLACK_2}>
						Войти
					</Button>
					<Stack sx={controlsStackSx}>
						<Tooltip
							placement='top'
							isOpen={showCheckTooltip}
							label='version 2.0'>
							<Box className='controls__tooltip-box'>
								<Checkbox
									isDisabled
									onMouseEnter={() => setShowCheckTooltip(true)}
									onMouseLeave={() => setShowCheckTooltip(false)}
									textColor={ColorPalette.GRAY_4}>
									<Text>Запомнить меня</Text>
								</Checkbox>
							</Box>
						</Tooltip>
						<Tooltip
							placement='top'
							isOpen={showPassTooltip}
							label='version 2.0'>
							<Text
								onMouseEnter={() => setShowPassTooltip(true)}
								onMouseLeave={() => setShowPassTooltip(false)}
								style={forgotPasswordStyle}
								color={ColorPalette.WHITE}>
								Забыли пароль
							</Text>
						</Tooltip>
					</Stack>
				</Stack>
			</Stack>
		</form>
	);
};
