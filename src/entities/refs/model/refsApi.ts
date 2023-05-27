import { createApi } from '@reduxjs/toolkit/query/react';

import { IDictionaryItem } from 'shared';
import {
	ApiMethods,
	ApiPaths,
	ApiRefPaths,
	baseQueryWithReauth,
	IApiDictionaryItem,
} from 'shared/api';
import { IRefCommonResponse, IRefRolesResponse, RolesRef } from './types';

const transformResponse = (response: IRefCommonResponse<IApiDictionaryItem>) => {
	const mappedResponse = response.data.map((item): IDictionaryItem => {
		return {
			...item,
			parentId: item.parent_id,
		};
	});
	return mappedResponse;
};

export const refsApi = createApi({
	reducerPath: 'refsApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		getRolesRef: builder.query<RolesRef[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.ROLES}`,
				method: ApiMethods.GET,
			}),
			transformResponse: (response: IRefRolesResponse<RolesRef>) => response.roles,
		}),
		getVacancyPrioritiesRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.VACANCY_PRIORITIES}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getAddressesRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.ADDRESSES}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getCountriesRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.COUNTRIES}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getFamilyStatsRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.FAMILY_STATS}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getContactTypesRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.CONTACT_TYPES}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getLanguagesRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.LANGUAGES}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getLanguageLevelsRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.LANGUAGE_LEVELS}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getInterviewStagesRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.INTERVIEW_STAGES}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
		getVacancyStatsRef: builder.query<IDictionaryItem[], void>({
			query: () => ({
				url: `${ApiPaths.REFS}${ApiRefPaths.VACANCY_STATS}`,
				method: ApiMethods.GET,
			}),
			transformResponse,
		}),
	}),
});

export const {
	useGetRolesRefQuery,
	useGetAddressesRefQuery,
	useGetContactTypesRefQuery,
	useGetCountriesRefQuery,
	useGetFamilyStatsRefQuery,
	useGetInterviewStagesRefQuery,
	useGetLanguageLevelsRefQuery,
	useGetLanguagesRefQuery,
	useGetVacancyPrioritiesRefQuery,
	useGetVacancyStatsRefQuery,
} = refsApi;
