import { useToast } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
	LoginMutation,
	useLazyGetViewerQuery,
	useLogInMutation,
} from 'entities/viewer/model';
import { LoginValidationSchema } from './validation';
import { useLocalStorage } from 'shared/services';
import { ApiConstNames } from 'shared/api';
import { EClientRoutes } from 'router/routes';

export const useLoginFormModel = () => {
	const toast = useToast();
	const navigate = useNavigate();
	const { setItem } = useLocalStorage();
	const [login, loginMutationData] = useLogInMutation();
	const [getViewer, { isLoading }] = useLazyGetViewerQuery();

	function showToast(status: 'success' | 'error', serverError?: boolean) {
		const title = status === 'success' ? 'Успех!' : 'Произошла ошибка',
			description =
				status === 'success'
					? 'Теперь Вы авторизованы'
					: serverError
					? 'Попробуйте позже'
					: 'Введите корректные данные';

		toast({
			title,
			description,
			status,
			duration: 2500,
			position: 'bottom-right',
			isClosable: true,
		});
	}

	async function handleLogin(data: LoginMutation) {
		const result = await login(data);
		const viewer = await getViewer(undefined, false);

		if ('error' in result || viewer.error) {
			showToast('error', true);
		} else {
			showToast('success');
			setItem(ApiConstNames.USER, 'exists');
			setTimeout(() => {
				navigate(EClientRoutes.Candidates);
			}, 500);
		}
	}

	const onSubmit: SubmitHandler<LoginValidationSchema> = (data) => {
		handleLogin(data);
	};

	return {
		onSubmit,
		loginMutationData,
		isLoading,
	};
};
