const useFormActions = () => {
    const setImagePreviewUpload = ({ preview, raw }) => (dispatch) => {
        dispatch({
            type: 'SET_IMAGE_PREVIEW_UPLOAD',
            payload: { "preview": preview, "raw": raw }
        })
    }

    return {
        setImagePreviewUpload,
    }
}

export default useFormActions;