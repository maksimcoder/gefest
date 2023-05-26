import { SystemStyleObject } from '@chakra-ui/react';

export const candidatesPageSx: SystemStyleObject = {
	width: '100%',
	paddingRight: '5vw',
};

export const candidatesGridSx: SystemStyleObject = {
	gridTemplateColumns: `repeat(auto-fit, minmax(470px, 1fr))`,
	gridAutoRows: '326px',
	width: '100%',
	height: '100%',
	gap: '20px',
};
