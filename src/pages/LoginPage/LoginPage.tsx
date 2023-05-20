import { FC, useEffect } from 'react';
import { ViewerModel } from 'entities/viewer';
import { ILoginMutation } from 'entities/viewer/model/types';

const LoginPage: FC = () => {
	// const { useLogin } = api;
	const obj: ILoginMutation = {
		username: 'admin',
		password: 'admin',
	};
	const [request] = ViewerModel.useLogInMutation();

	// const result = request(obj);
	useEffect(() => {
		const result = request(obj);
		console.log(result);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// console.log(result);

	return <h1>Auth page</h1>;
};

export { LoginPage };
