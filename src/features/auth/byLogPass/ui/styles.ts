import { SystemStyleObject } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { ColorPalette } from 'shared';

export const placeholderSx: SystemStyleObject = {
	color: ColorPalette.GRAY_3,
};

export const inputSx: SystemStyleObject = {
	paddingInline: '15px',
	fontSize: '16px',
	color: ColorPalette.GRAY_4,
};

export const buttonStackStyles: CSSProperties = {
	gap: '10px',
	marginTop: '20px',
	borderRadius: 'none',
};
