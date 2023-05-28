import { FC } from 'react';
import {
	Menu,
	MenuButton,
	MenuList,
	Button,
	MenuItem,
	NumberInput,
	Flex,
	NumberInputField,
} from '@chakra-ui/react';
import useFilterCandidatesByIncome from '../model/filterCandidatesByIncome';

export const FilterByIncome: FC = () => {
	const { handleChangeSalary } = useFilterCandidatesByIncome();

	return (
		<Menu>
			<MenuButton as={Button}>Доход</MenuButton>
			<MenuList maxWidth='166px'>
				<MenuItem
					width='50px'
					pointerEvents='none'
					isFocusable={false}
					isDisabled>
					RUB
				</MenuItem>
				<Flex
					sx={{
						width: '100%',
						justifyContent: 'center',
					}}>
					<NumberInput width='100px' size='sm'>
						<NumberInputField
							onChange={handleChangeSalary}
							name='salaryFrom'
							borderRadius='5px'
						/>
					</NumberInput>
					-
					<NumberInput width='100px' size='sm'>
						<NumberInputField
							onChange={handleChangeSalary}
							name='salaryTo'
							borderRadius='5px'
						/>
					</NumberInput>
				</Flex>
			</MenuList>
		</Menu>
	);
};
