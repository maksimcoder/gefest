export const BASE_API_URL = 'https://almax-dev.ru';

export const enum ApiPaths {
	// Auth
	SESSION = '/session',
	PROTECTED = '/protected',
	// Viewer
	USERS = '/users',
}

export const enum ApiMethods {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export const enum ApiConstNames {
	USER = 'user',
}
