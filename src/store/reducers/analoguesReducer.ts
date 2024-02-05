import { AnaloguesActionTypes, DetailsState, AnaloguesAction } from '../../types/detail'

const initialState: DetailsState = {
    goods: [],
    loading: false,
    error: null,
}

export const analoguesReducer = (state = initialState, action: AnaloguesAction):DetailsState => {
    switch(action.type) {
        case AnaloguesActionTypes.FETCH_ANALOGUES:
            return {loading: true, error: null, goods: []}
        case AnaloguesActionTypes.FETCH_ANALOGUES_SUCCESS:
            return {loading: false, error: null, goods: action.payload}
        case AnaloguesActionTypes.FETCH_ANALOGUES_ERROR:
            return {loading: false, error: action.payload, goods: []} 
        default:
             return state    
    }
}