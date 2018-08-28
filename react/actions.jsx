import client from '../js/client';

export const REQUESTING = 'REQUESTING';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const requesting = () => ({
    type: REQUESTING,
});
export const requestSuccess = url => ({
    type: REQUEST_SUCCESS,
    url,
});
export const requestFailure = error => ({
    type: REQUEST_FAILURE,
    error,
});

// THUNK ACTIONS
export function openBrowserTab(url) {
    return dispatch => {
        dispatch(requesting());
        client.openBrowserTab(url)
            .then(response => {
                dispatch(requestSuccess(response));
            })
            .catch(e => dispatch(requestFailure(e)));
    };
}
