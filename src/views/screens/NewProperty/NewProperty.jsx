import React from "react";
import useComponents from "../../components";
import "../../../assets/styles/components/NewProperty.scss";

const NewProperty = () => {
	const { NewPropertyForm } = useComponents();
	return (
		<div className="new-property-form-container">
			<NewPropertyForm />
		</div>
	);
};

export default NewProperty;
