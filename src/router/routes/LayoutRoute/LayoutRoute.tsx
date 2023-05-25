import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { Navbar } from 'shared/ui/layout';

interface ILayoutRouteProps {
	children: ReactNode;
}

export const LayoutRoute: FC<ILayoutRouteProps> = ({ children }) => {
	return (
		<Stack height='100%' className='layout' direction='row'>
			<Navbar />
			{children}
		</Stack>
	);
};
