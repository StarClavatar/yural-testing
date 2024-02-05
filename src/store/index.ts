import { useDispatch } from 'react-redux';
import { rootReducer } from './reducers/index';
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'



import { thunk } from "redux-thunk";

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk))


