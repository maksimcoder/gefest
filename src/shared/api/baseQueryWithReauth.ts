import {
	fetchBaseQuery,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { logoutThunk } from 'entities/viewer/model';

import { BASE_API_URL, ApiPaths } from './types';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_API_URL });

function addCredentialsToArgs(args: string | FetchArgs): FetchArgs {
	if (typeof args === 'string') {
		return {
			url: args,
			credentials: 'include',
		};
	}

	return {
		...args,
		credentials: 'include',
	};
}

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(addCredentialsToArgs(args), api, extraOptions);
	if (result.error && result.error.status === 401) {
		const refreshResult = await baseQuery(
			{ url: ApiPaths.SESSION, method: 'PATCH', credentials: 'include' },
			api,
			extraOptions
		);

		if (!refreshResult.error) {
			result = await baseQuery(addCredentialsToArgs(args), api, extraOptions);
		} else {
			api.dispatch(logoutThunk());
			const error: FetchBaseQueryError = {
				status: 500,
				data: null,
			};
			return error;
		}
	}
	return result;
};
