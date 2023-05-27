import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { PageContext } from 'features/context';

import { ColorPalette } from 'shared';
import { useComponentDidMount, useBodyBkgColor } from 'shared/hooks';
import { EClientRouteKeys } from 'router/routes';
import { candidatesPageSx } from './styles';
import { PageHeader } from 'widgets';
import { DataOperations } from 'widgets/DataOperations/DataOperations';
import { initialPageContext } from 'features/context/PageContext/PageContext';
import { CandidatesList } from 'features/candidates';

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
			<PageContext.Provider value={initialPageContext}>
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
				<CandidatesList />
			</PageContext.Provider>
		</Box>
	);
};

export { CandidatesPage };
