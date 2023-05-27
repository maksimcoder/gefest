import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiCandidate } from 'entities/candidate';

import { ApiMethods, ApiPaths, baseQueryWithReauth } from 'shared/api';
import { serializeQueryParams } from 'shared/utils';
import { ApiCandidateListResponse, GetCandidatesListParamsZod } from '../types';

export const candidatesApi = createApi({
	reducerPath: 'candidatesApi',
	baseQuery: baseQueryWithReauth,
	tagTypes: ['CandidatesList'],
	endpoints: (builder) => ({
		getCandidateslist: builder.query<
			ApiCandidateListResponse,
			GetCandidatesListParamsZod
		>({
			query: (data) => ({
				url: `${ApiPaths.CANDIDATES}${serializeQueryParams(data)}`,
				method: ApiMethods.GET,
			}),
			providesTags: ['CandidatesList'],
		}),
		getSingleCandidate: builder.query<ApiCandidate, void>({
			query: (data) => ({
				url: ApiPaths.SESSION,
				method: ApiMethods.GET,
				body: data,
			}),
		}),
		deleteSingleCandidate: builder.mutation<void, string>({
			query: (id) => ({
				url: `${ApiPaths.CANDIDATES}/${id}`,
				method: ApiMethods.DELETE,
			}),
			invalidatesTags: ['CandidatesList'],
		}),
	}),
});

export const {
	useGetCandidateslistQuery,
	useGetSingleCandidateQuery,
	useDeleteSingleCandidateMutation,
} = candidatesApi;
