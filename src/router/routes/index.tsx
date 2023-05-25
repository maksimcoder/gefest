import { ReactElement } from 'react';

import { CandidatesPage, LoginPage } from 'pages';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';

export const enum EAuthRoutes {
	Protected = '',
	LoginPage = '/login',
}

export const enum EClientRoutes {
	Candidates = '/',
}

export const enum EClientRouteKeys {
	Candidates = 'candidates',
}

export const clientRouteValues: Record<EClientRouteKeys, string> = {
	[EClientRouteKeys.Candidates]: 'Кандидаты',
};

export const navigationRoutes: Record<EClientRoutes, EClientRouteKeys> = {
	[EClientRoutes.Candidates]: EClientRouteKeys.Candidates,
};

export const RoutesComponents: Record<EAuthRoutes | EClientRoutes, ReactElement> = {
	[EAuthRoutes.Protected]: <ProtectedRoute />,
	[EAuthRoutes.LoginPage]: <LoginPage />,
	[EClientRoutes.Candidates]: <CandidatesPage />,
};
