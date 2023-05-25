import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { ViewerModel } from 'entities/viewer';

const { authApi, viewerApi } = ViewerModel;

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[viewerApi.reducerPath]: viewerApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(authApi.middleware, viewerApi.middleware);
	},
});

setupListeners(store.dispatch);
