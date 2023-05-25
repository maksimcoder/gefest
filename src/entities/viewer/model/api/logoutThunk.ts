import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'shared';
import { authApi } from './authApi';

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
	'authentication/logout',
	async (_: unknown, { dispatch }) => {
		dispatch(authApi.endpoints.logOut.initiate());
	}
);
