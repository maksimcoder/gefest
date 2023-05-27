import { FC } from 'react';
import {
	Avatar,
	AvatarBadge,
	IconButton,
	Stack,
	Spinner,
	SystemStyleObject,
	Flex,
	useMediaQuery,
} from '@chakra-ui/react';

import { useGetViewerQuery } from 'entities/viewer/model';
import { Text } from 'shared';
import { IconLogOut } from 'shared/icons/profile';
import { useLogOut } from 'features/logOut';

const ProfileWidget: FC = () => {
	const [smallerSizes] = useMediaQuery('(max-width: 1500px)');
	const { data: viewer, isLoading, isFetching } = useGetViewerQuery();
	const { logoutUser, isLoading: isLogoutLoading } = useLogOut();

	const loadingStatus = isLoading || isFetching;

	const badgeColor = viewer ? 'green.500' : loadingStatus ? 'orange.500' : 'red.500';

	const logoutElement = isLogoutLoading ? (
		<Spinner />
	) : (
		<IconButton
			onClick={logoutUser}
			cursor='pointer'
			aria-label='Profile logout'
			icon={<IconLogOut />}
		/>
	);

	const profileSx: SystemStyleObject = {
		position: 'absolute',
		top: smallerSizes ? '15px' : '30px',
		right: '40px',
	};

	return (
		<Stack
			direction='row'
			alignItems='center'
			gap='10px'
			sx={profileSx}
			className='Profile'>
			<Avatar>
				<AvatarBadge boxSize='1em' bg={badgeColor} />
			</Avatar>
			{viewer?.username && <Text>{viewer.username}</Text>}
			{/* <Text>Admin</Text> */}
			{viewer && (
				<Flex justifyContent='center' alignItems='center' boxSize='40px'>
					{logoutElement}
				</Flex>
			)}
			{/* {viewer && logoutElement} */}
		</Stack>
	);
};

export { ProfileWidget };
