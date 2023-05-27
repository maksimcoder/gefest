import { createApi } from '@reduxjs/toolkit/query/react';

import { ApiMethods, ApiPaths, baseQueryWithReauth } from 'shared/api';
import { serializeQueryParams } from 'shared/utils';
import { ApiCandidateListResponse, GetCandidatesListParamsZod } from './types';

export const candidatesApi = createApi({
	reducerPath: 'candidatesApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		getCandidateslist: builder.query<
			ApiCandidateListResponse,
			GetCandidatesListParamsZod
		>({
			query: (data) => ({
				url: `${ApiPaths.CANDIDATES}${serializeQueryParams(data)}`,
				method: ApiMethods.GET,
			}),
		}),
	}),
});

export const { useGetCandidateslistQuery } = candidatesApi;
