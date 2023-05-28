import { FC } from 'react';
import { Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react';
import { useFilterVacanciesByRecruiter } from '../model';

export const FilterByRecruiter: FC = () => {
	const { handleAllChange, handlePersonalChange } = useFilterVacanciesByRecruiter();

	return (
		<Menu>
			<MenuButton as={Button}>Вакансия</MenuButton>
			<MenuList>
				<MenuItem onClick={handlePersonalChange}>Назначенные на меня</MenuItem>
				<MenuItem onClick={handleAllChange}>Все вакансии</MenuItem>
			</MenuList>
		</Menu>
	);
};
