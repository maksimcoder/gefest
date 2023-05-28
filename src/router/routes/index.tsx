import { ReactElement } from 'react';

import { CandidatesPage, LoginPage, VacanciesPage } from 'pages';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { CalendarPage } from 'pages/CalendarPage/CalendarPage';

export const enum EAuthRoutes {
	Protected = '',
	LoginPage = '/login',
}

export const enum EClientRoutes {
	Candidates = '/',
	Vacancies = '/vacancies',
	Calendar = '/calendar',
}

export const enum EClientRouteKeys {
	Candidates = 'candidates',
	Vacancies = 'vacancies',
	Calendar = 'calendar',
}

export const clientRouteValues: Record<EClientRouteKeys, string> = {
	[EClientRouteKeys.Candidates]: 'Кандидаты',
	[EClientRouteKeys.Vacancies]: 'Вакансии',
	[EClientRouteKeys.Calendar]: 'Календарь',
};

export const navigationRoutes: Record<EClientRoutes, EClientRouteKeys> = {
	[EClientRoutes.Candidates]: EClientRouteKeys.Candidates,
	[EClientRoutes.Vacancies]: EClientRouteKeys.Vacancies,
	[EClientRoutes.Calendar]: EClientRouteKeys.Calendar,
};

export const RoutesComponents: Record<EAuthRoutes | EClientRoutes, ReactElement> = {
	[EAuthRoutes.Protected]: <ProtectedRoute />,
	[EAuthRoutes.LoginPage]: <LoginPage />,
	[EClientRoutes.Candidates]: <CandidatesPage />,
	[EClientRoutes.Vacancies]: <VacanciesPage />,
	[EClientRoutes.Calendar]: <CalendarPage />,
};
