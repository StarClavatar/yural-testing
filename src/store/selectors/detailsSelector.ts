import { RootState } from "../reducers";

export const getGoods = (state:RootState)=>{
    return state.details.goods
}
export const getError = (state:RootState)=>{
    return state.details.error
}
export const getLoading = (state:RootState)=>{
    return state.details.loading
}