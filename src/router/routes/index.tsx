import { ReactElement } from 'react';

import { CandidatesPage, LoginPage } from 'pages';
import { ProtectedRoute } from 'pages/ProtectedRoute/ProtectedRoute';

export const enum ERoutes {
	Protected = '',
	LoginPage = '/login',
	Candidates = '/',
}

export const RoutesComponents: Record<ERoutes, ReactElement> = {
	[ERoutes.Protected]: <ProtectedRoute />,
	[ERoutes.LoginPage]: <LoginPage />,
	[ERoutes.Candidates]: <CandidatesPage />,
};
