import {
	QueryBooleanSerializer,
	QueryArraySerializer,
	ISearchQueryParams,
} from 'shared/types';
import { isDefined } from './isDefined';

const serializeQueryBoolean: QueryBooleanSerializer = (value) => String(value);
const serializeQueryArray: QueryArraySerializer = (value) => value.join(',');

const createSearchQuerySerializer = (
	serializeBoolean: QueryBooleanSerializer = serializeQueryBoolean,
	serializeArray: QueryArraySerializer = serializeQueryArray
) => {
	return (query?: ISearchQueryParams): string => {
		if (!query) return '';

		const pairs = Object.entries(query)
			.map(([key, value]) => {
				if (!value) return null;

				let parsedValue = String(value);
				if (typeof value === 'boolean') parsedValue = serializeBoolean(value);
				if (Array.isArray(value)) parsedValue = serializeArray(value);

				return `${key}=${encodeURIComponent(parsedValue)}`;
			})
			.filter(isDefined);

		return pairs.length === 0 ? '' : `?${pairs.join('&')}`;
	};
};

export const serializeQueryParams = createSearchQuerySerializer(
	serializeQueryBoolean,
	serializeQueryArray
);
