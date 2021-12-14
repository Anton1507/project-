import { userReducer } from "./userReducer";
import{combineReducers} from "redux";
import { appReducer } from "./appReducer";
import { workReducer } from "./workReducer";


export const rootReducer = combineReducers({
    work:workReducer,
    app:appReducer,
    user:userReducer,
    

})