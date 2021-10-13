import React, { Suspense, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import useControllers from "../../../controllers";
import useComponents from "../../components";

const Property = () => {
	const { PropertyDescription } = useComponents();

	const { useScreensHooks } = useControllers();
	const { useProperty } = useScreensHooks();

	const { code } = useParams();

	// useEffect(() => {
	// 	console.log({ code });
	// }, [code]);

	useProperty();
	return (
		<Suspense fallback={<div>Loading property...</div>}>
			<PropertyDescription />
		</Suspense>
	);
};

export default Property;
