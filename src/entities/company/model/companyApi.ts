import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiMethods, ApiPaths, baseQueryWithReauth } from 'shared/api';
import {
	ICompanyDepartmentsResponse,
	ICompanyPositionsResponse,
	ICompanyGradesResponse,
} from './types';

export const companyApi = createApi({
	reducerPath: 'companyApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		getCompanyDepartments: builder.query<ICompanyDepartmentsResponse, void>({
			query: () => ({
				url: ApiPaths.DEPARTMENTS,
				method: ApiMethods.GET,
			}),
		}),
		getCompanyPositions: builder.query<ICompanyPositionsResponse, void>({
			query: () => ({
				url: ApiPaths.POSITIONS,
				method: ApiMethods.GET,
			}),
		}),
		getCompanyGrades: builder.query<ICompanyGradesResponse, void>({
			query: () => ({
				url: ApiPaths.GRADES,
				method: ApiMethods.GET,
			}),
		}),
	}),
});

export const {
	useGetCompanyDepartmentsQuery,
	useGetCompanyGradesQuery,
	useGetCompanyPositionsQuery,
	useLazyGetCompanyPositionsQuery,
} = companyApi;
