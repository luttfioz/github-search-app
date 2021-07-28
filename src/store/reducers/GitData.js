import { GIT_DATA } from "../constants/GitData";

const initialState = {
    gitData: {},
    fetching: false,
    fetched: false,
    error: null,
};

export function gitData(state = initialState, action) {
    switch (action.type) {
        case GIT_DATA.GET_GIT_DATA_PENDING:
            return { ...state, fetching: true, fetched: false, error: null };
        case GIT_DATA.GET_GIT_DATA_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                gitData: { ...action.payload.data },
            };
        case GIT_DATA.GET_GIT_DATA_REJECTED:
            return { ...state, fetching: false, fetched: false, error: action.payload };
        default:
            return state
    }
}
