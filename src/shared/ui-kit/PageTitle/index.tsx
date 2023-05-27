import { FC, ReactNode } from 'react';
import { ColorPalette } from 'shared/types';

import { Text } from '../Text';

interface IPageTitleProps {
	children: ReactNode;
}

export const PageTitle: FC<IPageTitleProps> = ({ children }) => {
	return (
		<Text fontWeight={500} fontSize='40px' color={ColorPalette.BLACK_1}>
			{children}
		</Text>
	);
};
