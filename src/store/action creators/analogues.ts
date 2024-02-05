import { AnaloguesActionTypes, Detail } from "../../types/detail";
import * as api from '../../api'
import { Dispatch } from "redux";


const getAnaloguesAction = (analogues: Detail[]) => (
    {type: AnaloguesActionTypes.FETCH_ANALOGUES_SUCCESS, payload: [...analogues]}
  )

export const getAnalogues = (number: number, brand: string, analogues: string) => (dispatch: Dispatch) => {
  api.getAnalogues(number, brand, analogues).then(({data})=>{
    dispatch(getAnaloguesAction(data.goods))
  })
}