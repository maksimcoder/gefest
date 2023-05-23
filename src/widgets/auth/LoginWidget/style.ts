import { SystemStyleObject } from '@chakra-ui/react';
import { ColorPalette } from 'shared';

export const widgetSx = (smallerPaddings?: boolean): SystemStyleObject => {
	const padding = smallerPaddings ? '40px 60px' : '47px 122px 105px';

	return {
		position: 'relative',
		alignItems: 'center',

		width: `clamp(345px, 50%, 645px)`,

		padding,

		backgroundColor: ColorPalette.GRAY_2,
		boxShadow: `0px 0px 8px ${ColorPalette.BLUE_2_05}`,
	};
};

export const widgetHeaderSx: SystemStyleObject = {
	alignItems: 'center',
};

export const widgetFormSx: SystemStyleObject = {
	width: '100%',
};

export const widgetGefestSx: SystemStyleObject = {
	position: 'absolute',
	top: '20px',
	left: '20px',

	fontSize: '24px',
	fontWeight: '400',
	letterSpacing: '0.11em',
};

const widgetBricksBase: SystemStyleObject = {
	position: 'absolute',

	display: 'flex',
	flexDirection: 'column',
};

export const widgetTopRightBricksSx: SystemStyleObject = {
	...widgetBricksBase,
	top: 0,
	right: 0,

	'.bricks__stack': {
		'.bricks__item:first-child': {
			borderRight: 'none',
		},
	},

	'.bricks__stack:last-child': {
		'.bricks__item': {
			borderTop: 'none',
		},
	},
};

export const widgetBottomLeftBricksSx: SystemStyleObject = {
	...widgetBricksBase,
	bottom: 0,
	left: 0,

	'.bricks__stack': {
		'.bricks__item:last-child': {
			borderLeft: 'none',
		},
	},

	'.bricks__stack:first-child': {
		'.bricks__item': {
			borderBottom: 'none',
		},
	},

	'.bricks__stack:last-child': {
		'.bricks__item:first-child': {
			borderRight: 'none',
		},
	},
};

export const brickStackSx: SystemStyleObject = {
	display: 'flex',
};

export const brickItemSx: SystemStyleObject = {
	height: '40px',
	border: `1px solid ${ColorPalette.GRAY_4}`,
};
