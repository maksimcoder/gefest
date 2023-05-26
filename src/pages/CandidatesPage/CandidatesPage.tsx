import { FC } from 'react';

import { SmallCandidateCard } from 'entities/candidate';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { ColorPalette } from 'shared';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { candidatesGridSx, candidatesPageSx } from './styles';

const CandidatesPage: FC = () => {
	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_6
	);

	useComponentDidMount(() => {
		changeColorOnMount();
		return () => {
			refreshColorOnUnmount();
		};
	});

	return (
		<Box sx={candidatesPageSx} className='candidates-page' as='main'>
			<Grid sx={candidatesGridSx} className='candidates-page__candidates'>
				<GridItem w='100%' h='100%'>
					<SmallCandidateCard
						firstName='Анна'
						lastName='Игнатян'
						salaryMinimum={60000}
						place='Нижний Новгород'
						grade='Junior'
					/>
				</GridItem>
				<GridItem w='100%'>
					<SmallCandidateCard
						firstName='Анна'
						lastName='Игнатян'
						salaryMinimum={60000}
						place='Нижний Новгород'
						grade='Middle'
					/>
				</GridItem>
				<GridItem w='100%'>
					<SmallCandidateCard
						firstName='Анна'
						lastName='Игнатян'
						salaryMinimum={60000}
						place='Нижний Новгород'
						grade='Senior'
					/>
				</GridItem>
				<GridItem w='100%'>
					<SmallCandidateCard
						firstName='Анна'
						lastName='Игнатян'
						salaryMinimum={60000}
						place='Нижний Новгород'
						grade='Lead'
					/>
				</GridItem>
			</Grid>
		</Box>
	);
};

export { CandidatesPage };
