import { ReactElement } from 'react';

import { LoginPage } from 'pages';

enum ERoutes {
	LoginPage = '/login',
}

const RoutesComponents: Record<ERoutes, ReactElement> = {
	[ERoutes.LoginPage]: <LoginPage />,
};

export { ERoutes, RoutesComponents };
