import { FC } from 'react';
import { Menu, MenuButton, MenuList, Button, Spinner, Center } from '@chakra-ui/react';
import { useFilterCandidatesByVacancy } from '../model';

export const FilterByVacancy: FC = () => {
	const { menuItems, load, isLoading, isFetching } = useFilterCandidatesByVacancy();
	const loading = isLoading || isFetching;

	const spinnerElement = (
		<Center>
			<Spinner />
		</Center>
	);

	return (
		<Menu onOpen={() => load(undefined, true)}>
			<MenuButton as={Button}>Вакансия</MenuButton>
			<MenuList>{loading ? spinnerElement : menuItems}</MenuList>
		</Menu>
	);
};
