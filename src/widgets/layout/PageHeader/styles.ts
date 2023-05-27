import { SystemStyleObject } from '@chakra-ui/react';
import { ColorPalette } from 'shared';

export const pageHeaderSx = (smallerSizes?: boolean): SystemStyleObject => {
	return {
		padding: `${smallerSizes ? '30px' : '60px'} 0 30px`,
	};
};

export const buttonStyle: SystemStyleObject = {
	['&:hover']: {
		backgroundColor: 'rgba(255, 75, 95, 0.7)',
	},
};

export const interactiveRow: SystemStyleObject = {
	paddingRight: '10vw',
};

export const dividerSx: SystemStyleObject = {
	borderColor: ColorPalette.BLUE_2,
};
