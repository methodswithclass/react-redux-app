import { createStore } from "redux";
import rootReducer from "./reducers/count";
const store = createStore(rootReducer);
export default store;