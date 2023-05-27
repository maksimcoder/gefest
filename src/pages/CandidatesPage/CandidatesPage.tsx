import { FC } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';

import { SmallCandidateCard } from 'entities/candidate';
import { ColorPalette } from 'shared';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { EClientRouteKeys } from 'router/routes';
import { candidatesGridSx, candidatesPageSx } from './styles';
import { PageHeader } from 'widgets';
import { DataOperations } from 'widgets/DataOperations/DataOperations';
import { useGetCandidateslistQuery } from 'features/candidates';

const CandidatesPage: FC = () => {
	const { data } = useGetCandidateslistQuery({});
	const { refreshColorOnUnmount, changeColorOnMount } = useBodyBkgColor(
		ColorPalette.GRAY_6
	);

	useComponentDidMount(() => {
		changeColorOnMount();
		return () => {
			refreshColorOnUnmount();
		};
	});

	console.log(data);

	return (
		<Box sx={candidatesPageSx} className='page candidates-page' as='main'>
			<PageHeader
				pageTitleKey={EClientRouteKeys.Candidates}
				buttonValue='Добавить кандидата'
			/>
			<DataOperations>
				<DataOperations.Filters>
					<Box>Filter 1</Box>
					<Box>Filter 2</Box>
					<Box>Filter 3</Box>
				</DataOperations.Filters>
			</DataOperations>
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
