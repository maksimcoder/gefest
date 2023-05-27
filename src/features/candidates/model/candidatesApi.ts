import { createApi } from '@reduxjs/toolkit/query/react';

import { ApiMethods, ApiPaths, baseQueryWithReauth } from 'shared/api';
import { GetCandidatesListParamsZod } from './types';

export const candidatesApi = createApi({
	reducerPath: 'candidatesApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		getCandidateslist: builder.query<void, GetCandidatesListParamsZod>({
			// getCandidateslist: builder.query<void, void>({
			query: (data) => ({
				url: ApiPaths.CANDIDATES,
				method: ApiMethods.GET,
				body: data,
			}),
		}),
	}),
});
