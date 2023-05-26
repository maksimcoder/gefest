import { FC } from 'react';
import { AbsoluteCenter, Spinner } from '@chakra-ui/react';
import { useNavigate, Outlet, useLocation, NavigateOptions } from 'react-router-dom';

import { EAuthRoutes } from 'router/routes';
import { useGetViewerQuery } from 'entities/viewer/model';
import { useBodyBkgColor, useComponentDidMount } from 'shared/hooks';
import { ColorPalette } from 'shared';

export const ProtectedRoute: FC = () => {
	const { data: viewer, isLoading } = useGetViewerQuery();
	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_2_09
	);
	const navigate = useNavigate();
	const location = useLocation();

	useComponentDidMount(() => {
		changeColorOnMount();
		return () => {
			refreshColorOnUnmount();
		};
	});

	const navigateOptions: NavigateOptions = {
		replace: true,
		state: { from: location },
	};

	if (!viewer && !isLoading) {
		navigate(EAuthRoutes.LoginPage, navigateOptions);
	}

	if (isLoading && !viewer) {
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
