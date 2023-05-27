import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiMethods, ApiPaths, baseQueryWithReauth } from 'shared/api';
import { ApiCandidate } from './types';

export const singleCandidateApi = createApi({
	reducerPath: 'singleCandidateApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		// сюда добавится id
		getCandidate: builder.query<ApiCandidate, void>({
			query: (data) => ({
				url: ApiPaths.SESSION,
				method: ApiMethods.GET,
				body: data,
			}),
		}),
	}),
});

export const { useGetCandidateQuery } = singleCandidateApi;
