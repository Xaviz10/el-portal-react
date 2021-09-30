import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useComponents from "../../components";
// import { setHeaderHome } from "../../../actions";

const PropertyShow = (props) => {
	const { PropertyDescription } = useComponents();
	const { code } = props.match.params; //get the params of the link

	const dataProperties = useSelector((state) => state.properties);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(setHeaderHome(false));
	// }, []);

	const memoDataPropertyShow = useMemo(() => {
		return dataProperties.find((propertyShow) => propertyShow.code === code);
	}, [code]);

	return memoDataPropertyShow ? (
		<>
			<PropertyDescription {...memoDataPropertyShow} />
		</>
	) : (
		<NotFound />
	);
};

export default PropertyShow;
