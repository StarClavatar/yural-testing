import { DetailsAction, DetailsActionTypes, DetailsState } from '../../types/detail'

const initialState: DetailsState = {
    goods: [],
    loading: false,
    error: null,
}

export const detailsReducer = (state = initialState, action: DetailsAction):DetailsState => {
    switch(action.type) {
        case DetailsActionTypes.FETCH_DETAILS:
            return {loading: true, error: null, goods: []}
        case DetailsActionTypes.FETCH_DETAILS_SUCCESS:
            return {loading: false, error: null, goods: action.payload}
        case DetailsActionTypes.FETCH_DETAILS_ERROR:
            return {loading: false, error: action.payload, goods: []} 
        default:
             return state   
    }
}