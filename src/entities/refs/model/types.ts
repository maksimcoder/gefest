export interface IRefCommonResponse<T> {
	data: T[];
}

export interface IRefRolesResponse<T> {
	roles: T[];
}

export type RolesRef = {
	code: number;
	name: string;
	sys_name: string;
};
