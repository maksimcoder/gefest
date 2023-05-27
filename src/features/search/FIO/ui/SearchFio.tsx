import { Stack, FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
import { FC } from 'react';
import { FontNames, ColorPalette } from 'shared';
import { useSearchFio } from '../model';

export const SearchFio: FC = () => {
	const { handleLocalFilterChange, localSearchFilters } = useSearchFio();
	return (
		<Stack direction='row' gap='10px'>
			<FormControl>
				<Input
					onChange={handleLocalFilterChange}
					value={localSearchFilters.last_name || ''}
					fontFamily={FontNames.Roboto}
					borderBottomColor={ColorPalette.BLUE_1}
					size='lg'
					variant='flushed'
					name='last_name'
					placeholder='Фамилия'
				/>
				<FormErrorMessage>defefe</FormErrorMessage>
			</FormControl>
			<FormControl>
				<Input
					onChange={handleLocalFilterChange}
					value={localSearchFilters.first_name || ''}
					fontFamily={FontNames.Roboto}
					borderBottomColor={ColorPalette.BLUE_1}
					size='lg'
					variant='flushed'
					name='first_name'
					placeholder='Имя'
				/>
				<FormErrorMessage>defefe</FormErrorMessage>
			</FormControl>
			<FormControl>
				<Input
					onChange={handleLocalFilterChange}
					value={localSearchFilters.middle_name || ''}
					fontFamily={FontNames.Roboto}
					borderBottomColor={ColorPalette.BLUE_1}
					size='lg'
					variant='flushed'
					name='middle_name'
					placeholder='Отчество'
				/>
				<FormErrorMessage>defefe</FormErrorMessage>
			</FormControl>
		</Stack>
	);
};
