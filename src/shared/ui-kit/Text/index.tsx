import { forwardRef } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

import { FontNames } from 'shared/theme';

export const Text = forwardRef((props: TextProps, ref) => {
	return (
		<ChakraText
			{...props}
			ref={ref}
			fontFamily={props.fontFamily || FontNames.Roboto}>
			{props.children}
		</ChakraText>
	);
});

Text.displayName = 'Text';
