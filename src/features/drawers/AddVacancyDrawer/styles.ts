import { SystemStyleObject } from '@chakra-ui/react';
import { ColorPalette } from 'shared';

export const infoBlockSx: SystemStyleObject = {
	width: '100%',
	padding: '30px',
	backgroundColor: ColorPalette.WHITE_07,
	boxShadow: `0px 0px 5px 2px ${ColorPalette.BLUE_2_02}`,
	borderRadius: '10px',
};

export const inputSx: SystemStyleObject = {
	boxShadow: `1px 1px 2px ${ColorPalette.BLUE_2_03}`,
	borderRadius: '10px',
};
