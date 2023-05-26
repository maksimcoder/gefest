import { SystemStyleObject } from '@chakra-ui/react';

export const candidatesPageSx: SystemStyleObject = {
	width: '100%',
};

export const candidatesGridSx: SystemStyleObject = {
	paddingRight: '5vw',
	gridTemplateColumns: `repeat(auto-fit, minmax(470px, 1fr))`,
	gridAutoRows: 'max-content',
	width: '100%',
	gap: '20px',
};
