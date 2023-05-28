import { createBrowserRouter } from 'react-router-dom';
import { EClientRoutes, EAuthRoutes, RoutesComponents } from 'router/routes';
import { LayoutRoute } from './routes/LayoutRoute/LayoutRoute';

const router = createBrowserRouter([
	{
		path: EAuthRoutes.LoginPage,
		element: RoutesComponents[EAuthRoutes.LoginPage],
	},
	{
		path: EAuthRoutes.Protected,
		element: RoutesComponents[EAuthRoutes.Protected],
		children: [
			{
				path: EClientRoutes.Candidates,
				element: (
					<LayoutRoute>
						{RoutesComponents[EClientRoutes.Candidates]}
					</LayoutRoute>
				),
			},
			{
				path: EClientRoutes.Vacancies,
				element: (
					<LayoutRoute>{RoutesComponents[EClientRoutes.Vacancies]}</LayoutRoute>
				),
			},
			{
				path: EClientRoutes.Calendar,
				element: (
					<LayoutRoute>{RoutesComponents[EClientRoutes.Calendar]}</LayoutRoute>
				),
			},
		],
	},
]);

export { router };
