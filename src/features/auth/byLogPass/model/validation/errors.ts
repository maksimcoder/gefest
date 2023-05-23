const enum LoginErrorTypes {
	USERNAME_EMPTY = 'username_empty',
	PASSWORD_EMPTY = 'password_empty',
}

export const LoginErrorMessages: Record<LoginErrorTypes, string> = {
	[LoginErrorTypes.USERNAME_EMPTY]: 'Логин не должен быть пустым',
	[LoginErrorTypes.PASSWORD_EMPTY]: 'Пароль не должен быть пустым',
};
