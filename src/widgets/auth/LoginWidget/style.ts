import { SystemStyleObject } from '@chakra-ui/react';
import { ColorPalette } from 'shared';

export const widgetSx = (smallerPaddings?: boolean): SystemStyleObject => {
	const padding = smallerPaddings ? '40px 60px' : '47px 122px 90px';
	console.log(smallerPaddings);
	return {
		width: `clamp(345px, 50%, 645px)`,
		alignItems: 'center',

		padding,

		backgroundColor: ColorPalette.GRAY_2,
		boxShadow: `0px 0px 8px ${ColorPalette.BLUE_2_05}`,
	};
};

export const widgetHeader: SystemStyleObject = {
	alignItems: 'center',
};

export const widgetForm: SystemStyleObject = {
	width: '100%',
};
