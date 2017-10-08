export const RESET_TEMPORARY_STATE = 'RESET_TEMPORARY_STATE';
export const CHANGE_CURRENT_ROUTE = 'CHANGE_CURRENT_ROUTE';

export function resetTemporaryState(id) {
    return {
        type: RESET_TEMPORARY_STATE,
    };
}

export function changeCurrentRoute(route) {
    return {
        type: CHANGE_CURRENT_ROUTE,
        payload: route
    };
}