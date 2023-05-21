import { createApi } from '@reduxjs/toolkit/query/react';
import { ILoginMutation } from '../types';
import { baseQueryWithReauth } from 'shared/api';

export const loginApi = createApi({
	reducerPath: 'userApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		logIn: builder.mutation<null, ILoginMutation>({
			query: (data) => ({
				url: `session`,
				method: 'POST',
				body: data,
				// credentials: 'include'
			}),
		}),
		protected: builder.mutation<void, void>({
			query: () => ({
				url: `session/protected`,
				method: 'POST',
			}),
		}),
	}),
});

export const { useLogInMutation, useProtectedMutation } = loginApi;
