export interface Detail {
  analogues: Detail[]
  brand: string;
  count: number;
  goodsID: string;
  name: string;
  number: string;
  price: number;
  rate: number;
  warehouses: [];
}

export interface DetailsState {
  goods: Detail[];
  loading: boolean;
  error: null | string;
}

export enum DetailsActionTypes {
  FETCH_DETAILS = "FETCH_DETAILS",
  FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS",
  FETCH_DETAILS_ERROR = "FETCH_DETAILS_ERROR",
}

export enum AnaloguesActionTypes {
  FETCH_ANALOGUES = "FETCH_ANALOGUES",
  FETCH_ANALOGUES_SUCCESS = "FETCH_ANALOGUES_SUCCESS",
  FETCH_ANALOGUES_ERROR = "FETCH_ANALOGUES_ERROR",
}

export type AnaloguesAction = FetchAnalogues | FetchAnaloguesSuccess | FetchAnaloguesError

interface FetchAnalogues {
  type: AnaloguesActionTypes.FETCH_ANALOGUES;
}
interface FetchAnaloguesSuccess {
  type: AnaloguesActionTypes.FETCH_ANALOGUES_SUCCESS;
  payload: Detail[];
}
interface FetchAnaloguesError {
  type: AnaloguesActionTypes.FETCH_ANALOGUES_ERROR;
  payload: string;
}

interface FetchDetailsAction {
  type: DetailsActionTypes.FETCH_DETAILS;
}
interface FetchDetailsSuccessAction {
  type: DetailsActionTypes.FETCH_DETAILS_SUCCESS;
  payload: Detail[];
}
interface FetchDetailsErrorAction {
  type: DetailsActionTypes.FETCH_DETAILS_ERROR;
  payload: string;
}

export type DetailsAction =
  | FetchDetailsAction
  | FetchDetailsSuccessAction
  | FetchDetailsErrorAction;
