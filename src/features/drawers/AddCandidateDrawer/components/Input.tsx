import { FC, ReactNode } from 'react';
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { ColorPalette } from 'shared';

interface IInputProps {
	children?: ReactNode;
}

export const Input: FC<IInputProps> = ({ children }) => {
	return (
		<InputGroup>
			{children}
			<InputRightElement h='100%'>
				<CloseIcon color={ColorPalette.BLACK_1_03} />
			</InputRightElement>
		</InputGroup>
	);
};
