export const useBodyBkgColor = (color: string) => {
	const changeColorOnMount = () => (document.body.style.backgroundColor = color);
	const refreshColorOnUnmount = () => (document.body.style.backgroundColor = '');

	return {
		changeColorOnMount,
		refreshColorOnUnmount,
	};
};
