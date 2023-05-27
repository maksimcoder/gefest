import { FC } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

export const FilterByVacancy: FC = () => {
	return (
		<Menu>
			<MenuButton as={Button}>Вакансия</MenuButton>
			<MenuList>
				<MenuItem>manager</MenuItem>
				<MenuItem>manager</MenuItem>
				<MenuItem>manager</MenuItem>
				<MenuItem>manager</MenuItem>
			</MenuList>
		</Menu>
	);
};
