import { useContext, useEffect, useState } from 'react';
import { RangeKeyDict, Range } from 'react-date-range';

import { CandidatesPageContext } from 'features/context';
import { useDebounce } from 'shared/hooks';

export const useFilterByDate = () => {
	const { updateFilters } = useContext(CandidatesPageContext);
	const initialSelectionRange: Range = {
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	};
	const [selectionRange, setSelectionRange] = useState<Range[]>([
		initialSelectionRange,
	]);
	const debouncedFrom = useDebounce<Range[]>(selectionRange, 400);

	function handleSelect(ranges: RangeKeyDict) {
		setSelectionRange([ranges.selection]);
	}

	useEffect(() => {
		const [start, end] = selectionRange;
		if (start.startDate || end.endDate) {
			updateFilters?.({
				date_from: start?.startDate?.toLocaleDateString('en-ca'),
				date_to: end?.startDate?.toLocaleDateString('en-ca'),
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedFrom]);

	return {
		handleSelect,
		selectionRange,
	};
};
