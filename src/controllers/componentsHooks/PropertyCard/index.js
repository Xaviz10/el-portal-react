import { useHistory } from "react-router";
import useApi from "../../../api";

const usePropertyCard = ({ property }) => {
	const { useActions } = useApi();
	const { dispatch, usePropertiesActions } = useActions();
	const { actSetPropertyToShow } = usePropertiesActions();

	const { push } = useHistory();

	const handleRedirectToProperty = () => {
		console.log("success");
		push(`/property/${property.code}`);
	};

	const handleShowProperty = () => {
		dispatch(actSetPropertyToShow({ property }), handleRedirectToProperty());
	};
	return {
		handleShowProperty,
	};
};

export default usePropertyCard;
