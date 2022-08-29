export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log('action>>>>', action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':

        const index = state.basket.findIndex(          /**find the index of the item we wish to delete */
            (basketItem) => basketItem.id === action.id
        );

        let newBasket = [...state.basket]; /**save the new basket value */

        if(index >= 0){
            newBasket.splice(index,1)
        }else{
            console.warn(`can't remove product whose id is ${index}`);
        }
            
        
        return {
                ...state,
                basket: newBasket,
            };

            default:
                return state;
    }
}

export default reducer;