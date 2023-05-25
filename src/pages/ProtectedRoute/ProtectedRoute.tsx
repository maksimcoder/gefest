import { FC } from 'react';
import { useNavigate, Outlet, useLocation, NavigateOptions } from 'react-router-dom';

import { ERoutes } from 'router/routes';
import { useGetViewerQuery } from 'entities/viewer/model';
import { Spinner } from '@chakra-ui/react';

export const ProtectedRoute: FC = () => {
	const { data: viewer, isLoading } = useGetViewerQuery();
	const navigate = useNavigate();
	const location = useLocation();

	const navigateOptions: NavigateOptions = {
		replace: true,
		state: { from: location },
	};

	if (!viewer && !isLoading) {
		navigate(ERoutes.LoginPage, navigateOptions);
	}

	if (isLoading && !viewer) {
		return <Spinner size='xl' />;
	}

	return <Outlet />;
};
