import { createApi } from '@reduxjs/toolkit/query/react';
import { LoginMutation } from '../types';
import { ApiMethods, ApiPaths, baseQueryWithReauth } from 'shared/api';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		logIn: builder.mutation<null, LoginMutation>({
			query: (data) => ({
				url: ApiPaths.SESSION,
				method: ApiMethods.POST,
				body: data,
			}),
		}),
		logOut: builder.mutation<null, void>({
			query: () => ({
				url: ApiPaths.SESSION,
				method: ApiMethods.DELETE,
			}),
		}),
		protected: builder.mutation<void, void>({
			query: () => ({
				url: `${ApiPaths.SESSION}${ApiPaths.PROTECTED}`,
				method: ApiMethods.POST,
			}),
		}),
	}),
});

export const { useLogInMutation, useLogOutMutation, useProtectedMutation } = authApi;
