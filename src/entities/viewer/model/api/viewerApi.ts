import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiViewer } from '../types';
import { ApiPaths, ApiMethods, baseQueryWithReauth } from 'shared/api';

export const viewerApi = createApi({
	reducerPath: 'viewerApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		getViewer: builder.query<ApiViewer, void>({
			query: () => ({
				url: ApiPaths.USERS,
				method: ApiMethods.GET,
				// credentials: 'include'
			}),
		}),
	}),
});

export const { useGetViewerQuery, useLazyGetViewerQuery } = viewerApi;
