import {createStore, combineReducers} from "redux";
import Cards from './reducers/cards';
import {reducer as formReducer} from "redux-form";

const mainReducer = combineReducers({
  form: formReducer,
  cards: Cards,
});

const store = createStore(mainReducer);

export default store;
