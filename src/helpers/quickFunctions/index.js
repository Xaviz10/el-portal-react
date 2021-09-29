const useQuickFunctions = () => {
	const formatterCurrency = new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
		maximumFractionDigits: "0",
	});

	return {
		formatterCurrency,
	};
};

export default useQuickFunctions;
