import { ReactElement } from 'react';

import { CandidatesPage, LoginPage, VacanciesPage } from 'pages';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';

export const enum EAuthRoutes {
	Protected = '',
	LoginPage = '/login',
}

export const enum EClientRoutes {
	Candidates = '/',
	Vacancies = '/vacancies',
}

export const enum EClientRouteKeys {
	Candidates = 'candidates',
	Vacancies = 'vacancies',
}

export const clientRouteValues: Record<EClientRouteKeys, string> = {
	[EClientRouteKeys.Candidates]: 'Кандидаты',
	[EClientRouteKeys.Vacancies]: 'Вакансии',
};

export const navigationRoutes: Record<EClientRoutes, EClientRouteKeys> = {
	[EClientRoutes.Candidates]: EClientRouteKeys.Candidates,
	[EClientRoutes.Vacancies]: EClientRouteKeys.Vacancies,
};

export const RoutesComponents: Record<EAuthRoutes | EClientRoutes, ReactElement> = {
	[EAuthRoutes.Protected]: <ProtectedRoute />,
	[EAuthRoutes.LoginPage]: <LoginPage />,
	[EClientRoutes.Candidates]: <CandidatesPage />,
	[EClientRoutes.Vacancies]: <VacanciesPage />,
};
