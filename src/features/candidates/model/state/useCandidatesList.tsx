import { useContext } from 'react';
import { GridItem, useToast } from '@chakra-ui/react';

import { CandidatesPageContext } from 'features/context';
import {
	useGetCandidateslistQuery,
	useDeleteSingleCandidateMutation,
} from 'features/candidates';
import { SmallCandidateCard } from 'entities/candidate';
import { useMouseLoading } from 'shared/hooks';

export const useCandidatesList = () => {
	const { setMouseDefault, setMouseLoading } = useMouseLoading();
	const toast = useToast({
		status: 'error',
		duration: 3000,
		position: 'bottom-right',
		isClosable: true,
	});
	const { filters } = useContext(CandidatesPageContext);
	console.log(filters);
	const { data, isLoading, isFetching, isSuccess, isError } = useGetCandidateslistQuery(
		filters || {}
	);
	const [deleteCandidate, { isError: isDeleteError, isLoading: isDeleteLoading }] =
		useDeleteSingleCandidateMutation();

	async function handleCandidateDelete(id: string) {
		setMouseLoading();
		const deletionResult = await deleteCandidate(id);
		if ('error' in deletionResult) {
			toast({
				title: 'Кандидат не был удалён',
				description: 'Попробуйте позже',
			});
		} else {
			setMouseDefault();
			toast({
				title: 'Успех',
				description: 'Кандидат был удалён',
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

	const candidatesListElements = data?.candidates.map(
		({ id, first_name, last_name, min_salary, position, adress, grade }) => {
			return (
				<GridItem key={id} w='100%' height='286px'>
					<SmallCandidateCard
						id={id}
						firstName={first_name}
						lastName={last_name}
						salaryMinimum={min_salary}
						position={position?.name}
						grade={grade?.name}
						address={adress?.value}
						onDelete={handleCandidateDelete}
					/>
				</GridItem>
			);
		}
	);

	return {
		candidatesListElements,
		isLoading,
		isFetching,
		isSuccess,
		isError,
		isDeleteError,
		isDeleteLoading,
	};
};
