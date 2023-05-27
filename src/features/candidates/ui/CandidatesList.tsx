import { FC } from 'react';
import { Center, Grid, Spinner, SystemStyleObject } from '@chakra-ui/react';

import { useCandidatesList } from '../model';
import { ColorPalette } from 'shared';

export const CandidatesList: FC = () => {
	const { candidatesListElements, isFetching, isLoading } = useCandidatesList();
	const loading = isLoading || isFetching;
	const candidatesGridSx: SystemStyleObject = {
		paddingRight: '5vw',
		gridTemplateColumns: `repeat(auto-fit, minmax(470px, 1fr))`,
		gridAutoRows: 'max-content',
		width: '100%',
		overflowY: 'auto',
		maxHeight: '58vh',
		gap: '20px',
	};

	const spinnerElem = (
		<Center>
			<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.400'
				color={ColorPalette.PINK_1}
				width='80px'
				height='80px'
			/>
		</Center>
	);

	return (
		<Grid sx={candidatesGridSx} className='candidates-page__candidates'>
			{loading ? spinnerElem : candidatesListElements}
		</Grid>
	);
};
