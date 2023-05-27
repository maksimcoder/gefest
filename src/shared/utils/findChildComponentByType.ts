import { isValidElement, Children, FC } from 'react';

export function findChildComponentByType<T>(children: React.ReactNode, type: FC<T>) {
	const childrenArray = Children.toArray(children);

	const component = childrenArray.find((child) => {
		if (isValidElement(child) && child.type === type) return children;
	});

	return component ?? null;
}
