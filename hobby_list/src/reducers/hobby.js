const initialState = {
    list: [],
    activeId: null,
}
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list, action.payload];
            return {
                ...state,
                list: newList
            }
        }


        case 'SET_ACTIVE_HOBBY':
            return state;
            break;
        default:
            return state;
    }
}
export default hobbyReducer;