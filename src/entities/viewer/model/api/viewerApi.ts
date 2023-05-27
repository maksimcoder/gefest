import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiViewer } from '../types';
import { ApiPaths, ApiMethods, baseQueryWithReauth } from 'shared/api';

export const viewerApi = createApi({
	reducerPath: 'viewerApi',
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		getViewer: builder.query<ApiViewer, void>({
			query: () => ({
				url: `${ApiPaths.USERS}${ApiPaths.CURRENT}`,
				method: ApiMethods.GET,
			}),
		}),
	}),
});

export const { useGetViewerQuery, useLazyGetViewerQuery } = viewerApi;
