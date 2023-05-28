import { createApi } from '@reduxjs/toolkit/query/react';
import { ICompanyItem } from 'entities/company';
import { GetCandidatesListParamsZod } from 'features/candidates';
import {
	ApiPaths,
	ApiMethods,
	baseQueryWithReauth,
	IApiDictionaryItem,
} from 'shared/api';
import { serializeQueryParams } from 'shared/utils';

interface IVacanciesListResponse {
	vacancies: IApiVacancy[];
	count: number;
}

interface IApiVacancy {
	id: string;
	position?: ICompanyItem;
	department?: ICompanyItem;
	grade?: ICompanyItem;
	salary_from?: number;
	salary_to?: number;
	employee_count?: number;
	priority?: IApiDictionaryItem;
	deadline?: string;
	recruiter_id?: string;
	status?: IApiDictionaryItem;
	adress?: IApiDictionaryItem;
	project?: string;
	skills?: string[];
}

interface IPostVacancy {
	position_id: string;
	department_id: string;
	grade_id: string;
	employee_count: number;
	priority_code: number;
	salary_from: number;
	salary_to: number;
	deadline: string;
	adress_code: number;
	project: string;
	skills: string[];
}

export const vacanciesApi = createApi({
	reducerPath: 'vacanciesApi',
	baseQuery: baseQueryWithReauth,
	tagTypes: ['VacanciesList'],
	endpoints: (builder) => ({
		getVacancieslist: builder.query<
			IVacanciesListResponse,
			GetCandidatesListParamsZod
		>({
			query: (data) => ({
				url: `${ApiPaths.VACANCIES}${serializeQueryParams(data)}`,
				method: ApiMethods.GET,
			}),
			providesTags: ['VacanciesList'],
		}),
		getSingleVacancy: builder.query<IApiVacancy, number>({
			query: (id) => ({
				url: `${ApiPaths.VACANCIES}/${id}`,
				method: ApiMethods.GET,
			}),
		}),
		deleteSingleVacancy: builder.mutation<void, string>({
			query: (id) => ({
				url: `${ApiPaths.VACANCIES}/${id}`,
				method: ApiMethods.DELETE,
			}),
			invalidatesTags: ['VacanciesList'],
		}),
	}),
});

export const {
	useGetVacancieslistQuery,
	useGetSingleVacancyQuery,
	useDeleteSingleVacancyMutation,
} = vacanciesApi;
