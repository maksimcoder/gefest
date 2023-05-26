import { FC } from 'react';
import { AbsoluteCenter, Spinner } from '@chakra-ui/react';
import { useNavigate, Outlet, useLocation, NavigateOptions } from 'react-router-dom';

import { EAuthRoutes } from 'router/routes';
import { useGetViewerQuery } from 'entities/viewer/model';
import { useComponentDidMount } from 'shared/hooks';
import { ColorPalette } from 'shared';
import { useLocalStorage } from 'shared/services';
import { ApiConstNames } from 'shared/api';

export const ProtectedRoute: FC = () => {
	const { data: viewer, isLoading } = useGetViewerQuery();
	const { getItem } = useLocalStorage();
	const navigate = useNavigate();
	const location = useLocation();
	const navigateOptions: NavigateOptions = {
		replace: true,
		state: { from: location },
	};

	useComponentDidMount(() => {
		if (!getItem(ApiConstNames.USER)) {
			navigate(EAuthRoutes.LoginPage, navigateOptions);
		}
	});

	if (!viewer && isLoading) {
		return (
			<AbsoluteCenter>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.400'
					color={ColorPalette.PINK_1}
					width='80px'
					height='80px'
				/>
			</AbsoluteCenter>
		);
	}

	return <Outlet />;
};
