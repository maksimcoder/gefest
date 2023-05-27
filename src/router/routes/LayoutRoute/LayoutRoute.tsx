import { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { Navbar } from 'widgets';
import { ProfileWidget } from 'widgets/auth/';

interface ILayoutRouteProps {
	children: ReactNode;
}

export const LayoutRoute: FC<ILayoutRouteProps> = ({ children }) => {
	return (
		<Flex gap='60px' height='100%' className='layout' direction='row'>
			<Navbar />
			<ProfileWidget />
			{children}
		</Flex>
	);
};
