import { FC } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';

import { SmallCandidateCard } from 'entities/candidate';
import { ColorPalette } from 'shared';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { EClientRouteKeys } from 'router/routes';
import { candidatesGridSx, candidatesPageSx } from './styles';
import { PageHeader } from 'widgets';

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
		<Box sx={candidatesPageSx} className='page candidates-page' as='main'>
			<PageHeader
				pageTitleKey={EClientRouteKeys.Candidates}
				buttonValue='Добавить кандидата'
			/>
			<Grid sx={candidatesGridSx} className='candidates-page__candidates'>
				<GridItem w='100%'>
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
