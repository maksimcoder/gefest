import { createBrowserRouter } from 'react-router-dom';
import { ERoutes, RoutesComponents } from 'router/routes';

const router = createBrowserRouter([
	{
		path: ERoutes.LoginPage,
		element: RoutesComponents[ERoutes.LoginPage],
	},
]);

export { router };
