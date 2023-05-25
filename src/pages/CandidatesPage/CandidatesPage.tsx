import { FC } from 'react';
import { useLazyGetViewerQuery, useProtectedMutation } from 'entities/viewer/model';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { ColorPalette } from 'shared';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const CandidatesPage: FC = () => {
	const [request] = useProtectedMutation();
	const [getUser] = useLazyGetViewerQuery();
	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_6
	);

	useComponentDidMount(() => {
		changeColorOnMount();
		return () => {
			refreshColorOnUnmount();
		};
	});

	// console.log('user', data);

	async function makeRequest() {
		const result = await getUser(undefined, false);
		console.log(result);
	}

	async function makereq() {
		const result = await request();
		console.log(result);
	}

	// useComponentDidMount(() => {
	// 	makeRequest();
	// });
	return (
		<>
			<button onClick={makeRequest}>user</button> <br />
			<button onClick={makereq}>request</button>
		</>
	);
};

export { CandidatesPage };
