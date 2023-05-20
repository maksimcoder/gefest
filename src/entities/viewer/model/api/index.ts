import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILoginMutation } from '../types';

export const loginApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://almax-dev.ru/' }),
	endpoints: (builder) => ({
		protected: builder.query<string, null>({
			query: () => ({
				url: 'protected',
			}),
		}),
		logIn: builder.mutation<null, ILoginMutation>({
			query: (data) => ({
				url: `session`,
				// When performing a mutation, you typically use a method of
				// PATCH/PUT/POST/DELETE for REST endpoints
				method: 'POST',
				// fetchBaseQuery automatically adds `content-type: application/json` to
				// the Headers and calls `JSON.stringify(patch)`
				body: data,
			}),
		}),
	}),
});

export const { useProtectedQuery, useLogInMutation } = loginApi;
