
import { ActionType } from "./consType"


export const addProduct = (item) =>{
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:item
    }
}

export const removeProduct = (item) =>{
    return {
        type:ActionType.REMOVE_PRODUCT,
        payload:item
    }
}

export const decrementTotal = (item) =>{
    return {
        type:ActionType.DECREMENT,
        payload:item
    }
}

export const incrementTotal =(item) =>{
    return {
        type:ActionType.INCREMENT,
        payload:item
    }
}