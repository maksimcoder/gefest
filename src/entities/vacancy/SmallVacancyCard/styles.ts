import { SystemStyleObject } from '@chakra-ui/react';
import { ColorPalette } from 'shared';

export const closeButtonSx: SystemStyleObject = {
	position: 'absolute',
	top: '0',
	right: '10px',
};

export const boxSx: SystemStyleObject = {
	position: 'relative',
	padding: '20px 20px 85px',
	boxShadow: `0px 0px 5px 2px rgba(141, 167, 209, 0.2)`,
	borderRadius: '10px',
	backgroundColor: ColorPalette.WHITE,
};
