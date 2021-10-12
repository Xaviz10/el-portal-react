import React, { Suspense, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import useComponents from "../../components";

const Property = () => {
	const { PropertyDescription } = useComponents();

	const { code } = useParams();

	// useEffect(() => {
	// 	console.log({ code });
	// }, [code]);

	return (
		<Suspense fallback={<div>Loading property...</div>}>
			<PropertyDescription />
		</Suspense>
	);
};

export default Property;
