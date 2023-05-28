import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, IconButton, Stack, useBoolean, Fade } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

import { clientRouteValues, EClientRouteKeys, navigationRoutes } from 'router/routes';

import { HammerLogo, Text } from 'shared/ui-kit';
import { IconCandidates, IconVacancies } from 'shared/icons/navigation';

import { navbarBtnSx, navbarContentSx, navbarSx, navLinkSx } from './styles';
import { ColorPalette } from 'shared/types';

export const Navbar: FC = () => {
	const [isOpen, setOpen] = useBoolean();
	const navigationIcons: Record<EClientRouteKeys, ReactElement> = {
		[EClientRouteKeys.Candidates]: <IconCandidates />,
		[EClientRouteKeys.Vacancies]: <IconVacancies />,
	};

	const navigationLinks = Object.entries(navigationRoutes).map(
		([routeLink, routeName]) => {
			return (
				<NavLink style={navLinkSx} to={routeLink} key={routeLink}>
					{navigationIcons[routeName]}
					<Fade in={isOpen}>
						<Text fontWeight={500}>{clientRouteValues[routeName]}</Text>
					</Fade>
				</NavLink>
			);
		}
	);

	const handleNavbarToggle = () => setOpen.toggle();

	return (
		<Box
			sx={navbarSx}
			as='aside'
			className={`navbar ${isOpen ? 'navbar--opened' : 'navbar--closed'}`}>
			<Stack sx={navbarContentSx} className='navbar__content'>
				<Stack alignItems='flex-start'>
					<HammerLogo
						rotate={55}
						color={ColorPalette.BLUE_1}
						size='semiSmall'
					/>
				</Stack>
				<Stack alignItems='flex-start' height='60%'>
					{navigationLinks}
				</Stack>
				<Stack alignItems='flex-start'>
					<IconButton
						sx={navbarBtnSx}
						backgroundColor={ColorPalette.BLUE_2_03}
						aria-label='toggle navbar'
						onClick={() => handleNavbarToggle()}
						icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};
