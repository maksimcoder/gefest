import { FC, ReactNode } from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import { Text } from 'shared';

import { findChildComponentByType } from 'shared/utils';

interface IDataOperationSubComponents {
	Filters: typeof Filters;
	DataView: typeof Filters;
	Sorts: typeof Filters;
}

interface IDataOperationsProps {
	children?: ReactNode;
}

interface IFiltersProps {
	children?: ReactNode;
}

const Filters: FC<IFiltersProps> = ({ children }) => {
	return <Stack>{children}</Stack>;
};

export const DataOperations: FC<IDataOperationsProps> & IDataOperationSubComponents = (
	props: IDataOperationsProps
) => {
	const { children } = props;
	const filters = findChildComponentByType(children, DataOperations.Filters);
	const dataView = findChildComponentByType(children, DataOperations.DataView);
	const sorts = findChildComponentByType(children, DataOperations.Filters);

	return (
		<Flex className='data-operations'>
			<Stack className='data-operttions__filters'>
				<Text fontSize='22px' fontWeight={300}>
					Фильтр по:
				</Text>
				{filters}
			</Stack>
			<Stack className='data-operttions__filters'>{dataView}</Stack>
			<Stack className='data-operttions__filters'>
				<Text fontSize='24px' fontWeight={300}>
					Сортировать по:
				</Text>
				{sorts}
			</Stack>
		</Flex>
	);
};

DataOperations.Filters = Filters;
DataOperations.DataView = Filters;
DataOperations.Sorts = Filters;
