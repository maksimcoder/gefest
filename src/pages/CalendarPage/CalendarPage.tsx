import { Box } from '@chakra-ui/react';
import { FC } from 'react';

const CalendarPage: FC = () => {
	return (
		<Box width='100%' height='100%'>
			<iframe
				title='calendar'
				src='https://calendar.google.com/calendar/embed?src=8c281464eb8efb07858a9c2b94e6e683a4eeb32a87ed6d51889b800b518a13cb%40group.calendar.google.com&ctz=Europe%2FMoscow'
				width='800'
				height='600'
				frameBorder='0'
				scrolling='no'></iframe>
		</Box>
	);
};

export { CalendarPage };
