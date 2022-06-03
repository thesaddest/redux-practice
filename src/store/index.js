import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cashReducer";
import {customersReducer} from "./customersReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)
