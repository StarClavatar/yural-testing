import * as api from '../../api'
import { Detail, DetailsActionTypes } from '../../types/detail'
import {Dispatch} from 'redux'

const getDetailsAction = (details: Detail[]) => (
  {type: DetailsActionTypes.FETCH_DETAILS_SUCCESS, payload: [...details]}
)

export const getDetails = (number: number) => (dispatch: Dispatch) => {
  api.getDetails(number).then(({data})=>{
    console.log(data)
    dispatch(getDetailsAction(data.goods))
  })
}
