import { FC } from 'react';
import { Grid, SystemStyleObject } from '@chakra-ui/react';

import { useCandidatesList } from '../model';

export const CandidatesList: FC = () => {
	const { candidatesListElements } = useCandidatesList();

	const candidatesGridSx: SystemStyleObject = {
		paddingRight: '5vw',
		gridTemplateColumns: `repeat(auto-fit, minmax(470px, 1fr))`,
		gridAutoRows: 'max-content',
		width: '100%',
		overflowY: 'auto',
		maxHeight: '58vh',
		gap: '20px',
	};

	return (
		<Grid sx={candidatesGridSx} className='candidates-page__candidates'>
			{candidatesListElements}
		</Grid>
	);
};
