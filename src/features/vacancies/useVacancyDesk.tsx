import { useContext } from 'react';
import { useToast } from '@chakra-ui/react';
import {
	SmallVacancyCard,
	useDeleteSingleVacancyMutation,
	useGetVacancieslistQuery,
} from 'entities/vacancy';
import { CandidatesPageContext } from 'features/context';
import { useMouseLoading } from 'shared/hooks';
import { useGetVacancyStatsRefQuery } from 'entities/refs';
import { ColorPalette, IDictionaryItem, KanbanItem } from 'shared';

export const useVacancyDesk = () => {
	const { setMouseDefault, setMouseLoading } = useMouseLoading();
	const toast = useToast({
		status: 'error',
		duration: 3000,
		position: 'bottom-right',
		isClosable: true,
	});
	const { data: vacancyStatuses } = useGetVacancyStatsRefQuery();
	const { filters, updateCount } = useContext(CandidatesPageContext);
	const {
		data: vacancies,
		isLoading,
		isFetching,
		isError,
	} = useGetVacancieslistQuery(filters || {});

	const [deleteCandidate] = useDeleteSingleVacancyMutation();

	async function handleVacancyDelete(id: string) {
		setMouseLoading();
		const deletionResult = await deleteCandidate(id);
		if ('error' in deletionResult) {
			toast({
				title: 'Вакансия не была удалена',
				description: 'Попробуйте позже',
			});
		} else {
			setMouseDefault();
			toast({
				title: 'Успех',
				description: 'Вакансия был удалена',
				status: 'success',
			});
		}
	}

	if (isError) {
		toast({
			title: 'Произошла ошибка',
			description: 'Попробуйте позже',
		});
	}

	function getKanbanColor(stat: IDictionaryItem) {
		switch (stat.code) {
			case 1:
				return ColorPalette.GREEN_4;
			case 2:
				return ColorPalette.ORANGE_4;
			case 3:
				return ColorPalette.BLACK_1;

			default:
				return ColorPalette.GREEN_4;
		}
	}

	updateCount?.(vacancies?.vacancies.length || 0);

	const kanbanElements = vacancyStatuses?.map((stat) => {
		const statusVacancies = vacancies?.vacancies.filter(
			(vacancy) => vacancy.status?.code === stat.code
		);

		const smallVacancy = statusVacancies?.map(
			({
				id,
				deadline,
				position,
				grade,
				salary_from,
				salary_to,
				department,
				priority,
			}) => {
				return (
					<SmallVacancyCard
						key={id}
						id={id}
						deadLine={deadline}
						title={position?.name}
						grade={grade?.name}
						salaryFrom={salary_from}
						salaryTo={salary_to}
						department={department?.name}
						priority={priority?.value}
						onCrossClick={handleVacancyDelete}
					/>
				);
			}
		);

		return (
			<KanbanItem key={stat.code} title={stat.value} color={getKanbanColor(stat)}>
				{smallVacancy}
			</KanbanItem>
		);
	});

	return {
		kanbanElements,
		isLoading,
		isFetching,
	};
};
