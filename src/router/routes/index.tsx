import { ReactElement } from 'react';

import { CandidatesPage, LoginPage } from 'pages';

export const enum ERoutes {
	LoginPage = '/login',
	Candidates = '/',
}

export const RoutesComponents: Record<ERoutes, ReactElement> = {
	[ERoutes.LoginPage]: <LoginPage />,
	[ERoutes.Candidates]: <CandidatesPage />,
};
