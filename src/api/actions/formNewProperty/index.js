import useStrings from "../../../strings";

const useFormNewPropertyActions = () => {
	const { useTypes } = useStrings();
	const { useFormNewPropertyTypes } = useTypes();
	const { SET_IMAGE_PREVIEW_UPLOAD } = useFormNewPropertyTypes();
	const actSetImagePreviewUpload =
		({ preview, raw }) =>
		(dispatch) => {
			dispatch({
				type: SET_IMAGE_PREVIEW_UPLOAD,
				payload: { preview, raw },
			});
		};

	return {
		actSetImagePreviewUpload,
	};
};

export default useFormNewPropertyActions;
