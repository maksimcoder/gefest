import { FC } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

import { FontNames } from 'shared/theme';

export const Text: FC<TextProps> = (props) => {
	return (
		<ChakraText fontFamily={props.fontFamily || FontNames.Roboto}>
			{props.children}
		</ChakraText>
	);
};
