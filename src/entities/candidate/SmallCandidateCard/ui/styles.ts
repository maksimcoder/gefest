import { SystemStyleObject } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { ColorPalette } from 'shared';

export const smallCandidateCardSx: SystemStyleObject = {
	alignItems: 'center',
	height: '100%',
	padding: '30px 0',

	boxShadow: `0px 0px 5px 2px ${ColorPalette.BLUE_2_02}`,
	backgroundColor: ColorPalette.WHITE_07,
	borderRadius: '20px',
};

export const avatarSx: SystemStyleObject = {
	position: 'relative',
};

export const avatarBadgeSx: SystemStyleObject = {
	position: 'absolute',
	bottom: '0',
	right: '-25px',
	color: ColorPalette.WHITE,
};

export const badgesStackSx: CSSProperties = {
	marginTop: '20px',
};

export const cardTextSx: SystemStyleObject = {
	alignItems: 'center',
};
