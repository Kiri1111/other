import {combineReducers, createStore} from "redux";
import {VisionReducer} from "./VisionReducer";
import {ChangeValueReducer} from "./Caunters/CaunterTypeA/reducers/ChangeValueReducer";

export type RootReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    vision: VisionReducer,
    value: ChangeValueReducer
})

export const store = createStore(rootReducer)