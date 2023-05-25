import { SystemStyleObject } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { ColorPalette } from 'shared/types';

export const navbarSx: SystemStyleObject = {
	width: '105px',
	height: '100%',
	padding: '43px 22px',

	backgroundColor: ColorPalette.BLUE_2_03,
	boxShadow: `0px 0px 6px ${ColorPalette.GRAY_2_05}`,

	transition: `width .3s ease`,

	'&.navbar--opened': {
		width: '200px',
	},
};

export const navbarContentSx: SystemStyleObject = {
	height: '100%',
	justifyContent: 'space-between',
};

export const navLinkSx: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

export const navbarBtnSx: SystemStyleObject = {
	width: '50px',
	height: '48px',
};
