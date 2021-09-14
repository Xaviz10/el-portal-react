
export const setFeaturedProperties = payload => ({
    type: 'SET_FEATURED_PROPERTIES',
    payload,
})

export const setHeaderHome = payload => ({
    type: 'SET_HEADER_HOME',
    payload,
})

export const setImagePreviewUpload = (preview, raw) => ({
    type: 'SET_IMAGE_PREVIEW_UPLOAD',
    payload: { "preview": preview, "raw": raw }
})