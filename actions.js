export const actionTypes = {
    SET_META: 'Set meta for header',
    SET_META_ASYNC: 'Set meta for header (async)',
    SET_ADDRESS: 'Set user\'s address',
    SET_LOCATION: 'Set location from address',
    GET_LOCATION_ASYNC: 'Get location from address (async)'
};

export const setMeta = data => ({ type: actionTypes.SET_META, data });
export const setMetaAsync = () => ({ type: actionTypes.SET_META_ASYNC });
export const setAddress = data => ({ type: actionTypes.SET_ADDRESS, data });
export const setLocation = data => ({ type: actionTypes.SET_LOCATION, data });
export const getLocationAsync = data => ({ type: actionTypes.GET_LOCATION_ASYNC, data });
