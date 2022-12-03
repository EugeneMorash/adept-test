import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {tableReducer} from "../features/table-reducer";


const rootReducer = combineReducers({
    table: tableReducer,
    // employee: employeeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store