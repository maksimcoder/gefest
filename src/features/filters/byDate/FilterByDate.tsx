import { FC } from 'react';
import { DateRangePicker } from 'react-date-range';

import { Menu, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { useFilterByDate } from './useFilterByDate';

export const FilterByDate: FC = () => {
	const { handleSelect, selectionRange } = useFilterByDate();

	return (
		<>
			<Menu>
				<MenuButton as={Button}>Дата</MenuButton>
				<MenuList>
					<DateRangePicker ranges={selectionRange} onChange={handleSelect} />
				</MenuList>
			</Menu>
		</>
	);
};
