export const useMouseLoading = () => {
	const setMouseLoading = () => (document.body.style.cursor = 'wait');
	const setMouseDefault = () => (document.body.style.cursor = '');

	return {
		setMouseDefault,
		setMouseLoading,
	};
};
