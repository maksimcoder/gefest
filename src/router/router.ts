import { createBrowserRouter } from 'react-router-dom';
import { ERoutes, RoutesComponents } from 'router/routes';

const router = createBrowserRouter([
	{
		path: ERoutes.LoginPage,
		element: RoutesComponents[ERoutes.LoginPage],
	},
	{
		path: ERoutes.Protected,
		element: RoutesComponents[ERoutes.Protected],
		children: [
			{
				path: ERoutes.Candidates,
				element: RoutesComponents[ERoutes.Candidates],
			},
		],
	},
]);

export { router };
