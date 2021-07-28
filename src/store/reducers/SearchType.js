const initialState = {
    searchType: null,
};

export function searchType(state = initialState, action) {
    switch (action.type) {
        case 'type':
            return { ...state, searchType: action.payload };
        default:
            return state
    }
}