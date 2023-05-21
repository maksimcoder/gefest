import {
	fetchBaseQuery,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { BASE_API_URL, ApiPaths } from './types';

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_API_URL,
	prepareHeaders(headers) {
		headers.set('Credentials', 'include');
		return headers;
	},
});
export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	console.log(api);
	console.log(extraOptions);
	let result = await baseQuery(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		// try to get a new token
		const refreshResult = await baseQuery(ApiPaths.SESSION, api, extraOptions);
		if (refreshResult.data) {
			// store the new token
			console.log('refreshed token');
			// api.dispatch(tokenReceived(refreshResult.data));
			// retry the initial query
			result = await baseQuery(args, api, extraOptions);
		} else {
			console.log('logged out');
			// api.dispatch(loggedOut());
		}
	}
	return result;
};
