import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { ViewerModel } from 'entities/viewer';

const { loginApi } = ViewerModel;

export const store = configureStore({
	reducer: {
		[loginApi.reducerPath]: loginApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(loginApi.middleware);
	},
});

setupListeners(store.dispatch);
