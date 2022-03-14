
import { ActionType } from "../actions/consType"
import products from "../../product.json"

const initialState = {
    products:products,
    cart:[]
}







export const cartReducer = (state = initialState,action) =>{
    switch(action.type){
        // case ActionType.SELECTED_PRODUCT:
        //     const item=action.payload
        //     if(state.cart.includes(item)){
        //         const index =state.cart.indexOf(item)
        //         state.cart[index].number++
        //         return{
        //             ...state,
        //             cart:[...state.cart]
        //         }
        //     }else{
        //         item.number++
        //         return {
        //             ...state,
        //             cart:[...state.cart,item]
        //         }
        //     }

        case ActionType.SELECTED_PRODUCT:
            const item = action.payload
            if(state.cart.includes(item)){
                const index = state.cart.indexOf(item)
                state.cart[index].number++
                return {
                    ...state,
                    cart:[...state.cart]
                }
            }else{
                item.number++
                return {
                    ...state,
                    cart:[...state.cart,item]
                }
            }
            
            
        case ActionType.REMOVE_PRODUCT:
            return {
                ...state,
                cart:[...state.cart].filter(item =>item.id !== action.payload.id)
            }

        case ActionType.INCREMENT:
            // const itemf = action.payload
            const index = state.cart.indexOf(action.payload)
            state.cart[index].number++

            return {
                ...state,
                cart:[...state.cart,]
            }
        case ActionType.DECREMENT:
            // const itemd = action.payload
            const indexs = state.cart.indexOf(action.payload)
           if(state.cart[indexs].number > 1){
            const indexs = state.cart.indexOf(action.payload)
            state.cart[indexs].number--
            return {
                ...state,
                cart:[...state.cart]
            }
           }else{
               return {
                   ...state,
                   cart:[...state.cart].filter(item =>item.id !== action.payload.id)
               }
           }
        default:
            return state
    }
}