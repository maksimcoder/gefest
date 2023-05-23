import { SystemStyleObject } from '@chakra-ui/react';
import { ColorPalette } from 'shared';

export const loginPageSx: SystemStyleObject = {
	position: 'relative',

	justifyContent: 'center',
	alignItems: 'center',

	width: '100%',
	height: '100%',
};

const decorationsBase: SystemStyleObject = {
	position: 'absolute',
};

export const bricksSx: SystemStyleObject = {
	...decorationsBase,
	top: 0,
	right: 0,

	'.bricks__stack:first-child': {
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

export const bricksStackSx: SystemStyleObject = {
	display: 'flex',
};

export const brickItemSx = (smallerSizes?: boolean): SystemStyleObject => {
	const sizes = {
		width: smallerSizes ? '160px' : '241px',
		height: smallerSizes ? '93px' : '140px',
	};

	return {
		...sizes,
		border: `1px solid ${ColorPalette.GRAY_4}`,
	};
};

const hammerBase: SystemStyleObject = {
	position: 'absolute',
};

export const hammerRedSx: SystemStyleObject = {
	...hammerBase,

	top: '-38px',
	left: '35px',
};

export const hammerBlueSx = (smallerSizes?: boolean): SystemStyleObject => {
	return {
		...hammerBase,

		top: 0,
		bottom: 0,
		margin: 'auto 0',
		right: smallerSizes ? '15vw' : '25vw',
	};
};

export const hammerWhiteMediumSx: SystemStyleObject = {
	...hammerBase,

	bottom: '5vh',
	left: '5vw',
};

export const hammerWhiteLargeSx = (smallerSizes?: boolean): SystemStyleObject => {
	return {
		...hammerBase,

		bottom: smallerSizes ? '6vh' : '4vh',
		right: smallerSizes ? '3vw' : '2vw',
	};
};
