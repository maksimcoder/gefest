export const BASE_API_URL = 'https://almax-dev.ru';

export const enum ApiPaths {
	// Auth
	SESSION = '/session',
	PROTECTED = '/protected',
	// Users
	USERS = '/users',
	CURRENT = '/current',
	// Ref
	REFS = '/refs',
	// Candidates
	CANDIDATES = '/candidates',
	// Company
	DEPARTMENTS = '/departments',
	POSITIONS = '/positions',
	GRADES = '/grades',
}

export const enum ApiRefPaths {
	ROLES = '/roles',
	VACANCY_PRIORITIES = '/vacancy-priorities',
	ADDRESSES = '/adresses',
	COUNTRIES = '/countries',
	FAMILY_STATS = '/family-stats',
	CONTACT_TYPES = '/contact-types',
	LANGUAGES = '/languages',
	LANGUAGE_LEVELS = '/language-levels',
	INTERVIEW_STAGES = '/interview-stages',
	VACANCY_STATS = '/vacancy-stats',
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

export interface IApiDictionaryItem {
	code: number;
	value: string;
	parent_id?: number;
}
