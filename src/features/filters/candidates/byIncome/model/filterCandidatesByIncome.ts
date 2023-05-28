import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { CandidatesPageContext } from 'features/context';
import { useDebounce } from 'shared/hooks';

export const useFilterCandidatesByIncome = () => {
	const { updateFilters } = useContext(CandidatesPageContext);
	const [salaryFrom, setSalaryFrom] = useState<string>('');
	const [salaryTo, setSalaryTo] = useState<string>('');
	const debouncedFrom = useDebounce<string>(salaryFrom, 600);
	const debouncedTo = useDebounce<string>(salaryTo, 600);

	function handleChangeSalary(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.name === 'salaryFrom') {
			setSalaryFrom(e.target.value);
		} else {
			setSalaryTo(e.target.value);
		}
	}

	useEffect(() => {
		console.log('salaryFrom', salaryFrom);
		console.log('salaryTo', salaryTo);
		updateFilters?.({
			salary_from: salaryFrom,
			salary_to: salaryTo,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedFrom, debouncedTo]);

	return {
		handleChangeSalary,
	};
};

export default useFilterCandidatesByIncome;
