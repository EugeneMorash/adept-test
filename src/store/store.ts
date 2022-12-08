import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
    ThunkAction,
    ThunkDispatch
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {CompanyActionType, companyReducer} from "../features/company-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {EmployeeActionType, employeeReducer} from "../features/employee-reducer";


const rootReducer = combineReducers({
    table: companyReducer,
    employee: employeeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


//* custom hook for TS
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// * types
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppActionsType =
    | CompanyActionType
    | EmployeeActionType

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>


// @ts-ignore
window.store = store