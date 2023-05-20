export interface ILoginMutation {
	username: string;
	password: string;
}

export interface IPostMutation {
	title: string;
	body: string;
	userId: number;
}
