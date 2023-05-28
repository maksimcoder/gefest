import { Avatar, Badge, Stack, CloseButton, Fade, useBoolean } from '@chakra-ui/react';
import { FC } from 'react';
import { ColorPalette, Text } from 'shared';
import { IconMapPin } from 'shared/icons/candidate/smallCandidate';
import {
	avatarBadgeSx,
	avatarSx,
	badgesStackSx,
	cardTextSx,
	closeButtonSx,
	smallCandidateCardSx,
} from './styles';
import { avatarColors } from '../const';
import { GradeLocalNames } from 'shared/const/reference';
import { useComponentDidMount } from 'shared/hooks';

interface ISmallCandidateCardProps {
	id: string;
	firstName: string;
	lastName: string;
	salaryMinimum?: number;
	position?: string;
	address?: string;
	experience?: number;
	grade?: string;
	onDelete?: (id: string) => void;
}

export const SmallCandidateCard: FC<ISmallCandidateCardProps> = ({
	id,
	firstName = 'Анна',
	lastName = 'Игнатян',
	salaryMinimum = 60000,
	position = 'Аналитик',
	address = 'Нижний Новгород',
	experience = 6,
	grade = 'junior',
	onDelete,
}) => {
	const salary = `${salaryMinimum} ₽`;
	const [isMount, setMount] = useBoolean();

	const handleDeleteClick = () => onDelete?.(id);

	useComponentDidMount(() => {
		setMount.on();
	});

	return (
		<Fade in={isMount}>
			<Stack sx={smallCandidateCardSx} className='small-candidate-card' as='aside'>
				<Avatar
					sx={avatarSx}
					bg={avatarColors[grade as GradeLocalNames]}
					size='lg'
					className='small-candidate-card__avatar'>
					{grade && (
						<Badge
							bg={avatarColors[grade as GradeLocalNames]}
							sx={avatarBadgeSx}>
							{grade}
						</Badge>
					)}
				</Avatar>
				<Stack sx={cardTextSx} className='small-candidate-card__text'>
					<Text
						fontSize='32px'
						fontWeight={400}>{`${firstName} ${lastName}`}</Text>
					<Text style={{ marginTop: '0' }} fontSize='24px' fontWeight={300}>
						{position}
					</Text>
					<Stack direction='row'>
						<IconMapPin />
						<Text fontSize='24x' fontWeight={300}>
							{address}
						</Text>
					</Stack>
				</Stack>
				<Stack style={badgesStackSx} direction='row'>
					<Badge colorScheme='red'>{salary}</Badge>
					<Badge colorScheme='telegram'>{experience} лет опыта</Badge>
				</Stack>
				<CloseButton
					onClick={handleDeleteClick}
					color={ColorPalette.GRAY_1}
					sx={closeButtonSx}
				/>
			</Stack>
		</Fade>
	);
};
