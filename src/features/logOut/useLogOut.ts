import { useToast } from '@chakra-ui/react';
import { useLogOutMutation } from 'entities/viewer/model';
import { useNavigate } from 'react-router-dom';
import { EAuthRoutes } from 'router/routes';
import { ApiConstNames } from 'shared/api';
import { useLocalStorage } from 'shared/services';

export const useLogOut = () => {
	const toast = useToast();
	const { removeItem } = useLocalStorage();
	const navigate = useNavigate();
	const [logout, { isLoading }] = useLogOutMutation();

	function showToast(status: 'success' | 'error', serverError?: boolean) {
		const title = status === 'success' ? 'Выход' : 'Произошла ошибка',
			description =
				status === 'success'
					? 'Вы вышли из программы'
					: serverError
					? 'Попробуйте позже'
					: 'Что-то пошло не так...';

		toast({
			title,
			description,
			status,
			duration: 2500,
			position: 'bottom-right',
			isClosable: true,
		});
	}

	async function logoutUser() {
		const result = await logout();

		if ('error' in result) {
			showToast('error', true);
		} else {
			showToast('success');
			removeItem(ApiConstNames.USER);
			setTimeout(() => {
				navigate(EAuthRoutes.LoginPage);
			}, 500);
		}
	}

	return {
		logoutUser,
		isLoading,
	};
};
