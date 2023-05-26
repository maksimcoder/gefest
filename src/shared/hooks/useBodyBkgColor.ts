export const useBodyBkgColor = (color: string) => {
	const changeColorOnMount = () => (document.body.style.backgroundColor = color);
	const refreshColorOnUnmount = () => {
		console.log('refresh', color);
		document.body.style.backgroundColor = '';
	};

	return {
		changeColorOnMount,
		refreshColorOnUnmount,
	};
};
