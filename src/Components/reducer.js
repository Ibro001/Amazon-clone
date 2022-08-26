export const initialState = {
    basket: [],
    User: null
};

const reducer = (state, action) => {
    console.log('action>>>>', action);

    switch(action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

            default:
                return state
    }
}

export default reducer;