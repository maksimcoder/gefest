export const useLocalStorage = () => {
	const setItem = (key: string, value: unknown) => {
		if (!value) console.log(`${value} is undefined`);
		localStorage.setItem(String(key), JSON.stringify(value));
	};

	const getItem = (key: string) => localStorage.getItem(key);

	const removeItem = (key: string) => localStorage.removeItem(key);

	return {
		setItem,
		getItem,
		removeItem,
	};
};
