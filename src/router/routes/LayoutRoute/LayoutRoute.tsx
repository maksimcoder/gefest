import { FC, ReactNode } from 'react';
import { Stack } from '@chakra-ui/react';
import { Navbar } from 'widgets';

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
