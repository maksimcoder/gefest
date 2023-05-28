import { FC, ReactNode } from 'react';
import { Stack } from '@chakra-ui/react';

export interface IFiltersProps {
	children?: ReactNode;
}

export const Filters: FC<IFiltersProps> = ({ children }) => {
	return <Stack direction='row'>{children}</Stack>;
};
