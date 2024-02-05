import { combineReducers } from "redux";
import { detailsReducer } from "./detailsReducer";
import { analoguesReducer } from "./analoguesReducer";

export const rootReducer = combineReducers({
    details: detailsReducer,
    analogues: analoguesReducer
});

export type RootState = ReturnType<typeof rootReducer>;