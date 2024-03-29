import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from 'router/router';
import { store } from 'app/redux';

import '@fontsource/heebo/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<StrictMode>
		<Provider store={store}>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</Provider>
	</StrictMode>
);
