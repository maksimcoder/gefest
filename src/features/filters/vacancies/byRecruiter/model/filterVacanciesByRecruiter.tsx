import { useContext, useEffect, useState } from 'react';

import { CandidatesPageContext } from 'features/context';
import { useGetViewerQuery } from 'entities/viewer/model';

export const useFilterVacanciesByRecruiter = () => {
	const { updateFilters } = useContext(CandidatesPageContext);
	const { data: viewer } = useGetViewerQuery();
	const [view, setView] = useState<'personal' | 'all'>('all');

	function handlePositionChoose(id?: string) {
		if (view === 'all') {
			updateFilters?.({ recruiter_id: '' });
		} else {
			if (!id) return;
			updateFilters?.({ recruiter_id: id });
		}
	}

	useEffect(() => {
		handlePositionChoose(viewer?.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [view]);
	console.log(viewer);
	const handleAllChange = () => setView('all');
	const handlePersonalChange = () => setView('personal');

	return {
		view,
		handleAllChange,
		handlePersonalChange,
	};
};
