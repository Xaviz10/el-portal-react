
const usePropertiesActions = () => {

    const actSetFeaturedProperties = () => (dispatch) => {
        dispatch({
            type: 'SET_FEATURED_PROPERTIES',
        })
    }

    return {
        setFeaturedProperties,
    }
}

export default usePropertiesActions;