import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { ViewerModel } from 'entities/viewer';
import { refsApi } from 'entities/refs';
import { companyApi } from 'entities/company';
import { singleCandidateApi } from 'entities/candidate';

const { authApi, viewerApi } = ViewerModel;

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[viewerApi.reducerPath]: viewerApi.reducer,
		[refsApi.reducerPath]: refsApi.reducer,
		[companyApi.reducerPath]: companyApi.reducer,
		[singleCandidateApi.reducerPath]: singleCandidateApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(
			authApi.middleware,
			viewerApi.middleware,
			refsApi.middleware,
			companyApi.middleware,
			singleCandidateApi.middleware
		);
	},
});

setupListeners(store.dispatch);
