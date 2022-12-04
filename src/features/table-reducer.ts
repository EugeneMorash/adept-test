import {ResponseType, tableAPI} from "./table-api";

const initialState = {
    state: [] as ResponseType[]
}

//* Types *//

export type TableStateType = typeof initialState

export type TableActionType =
    | getTableStateAT
    | changeCompanyStatusAT
    | changeAllCompanyStatusAT

type getTableStateAT = ReturnType<typeof getTableStateAC>
type changeCompanyStatusAT = ReturnType<typeof changeCompanyStatusAC>
type changeAllCompanyStatusAT = ReturnType<typeof changeAllCompanyStatusAC>


export const tableReducer = (state: TableStateType = initialState, action: TableActionType): TableStateType => {
    switch (action.type) {
        case 'GET-TABLE-STATE':
            return {...state, state: action.state}
        case 'CHANGE-COMPANY-STATUS':
            return {
                ...state,
                state: state.state.map((c) => c.id === action.companyID ? {
                    ...c,
                    isActive: action.isActive
                } : c)
            }
        case 'CHANGE-ALL-COMPANY-STATUS':
            return {
                ...state,
                state: state.state.map((c) => ({
                    ...c, isActive: action.isActive
                }))
            }
        default:
            return state;
    }
}


//* ActionCreators *//

export const getTableStateAC = (state: ResponseType[]) => ({
    type: 'GET-TABLE-STATE',
    state
}) as const

export const changeCompanyStatusAC = (companyID: string, isActive: boolean) => ({
    type: 'CHANGE-COMPANY-STATUS',
    companyID,
    isActive
}) as const

export const changeAllCompanyStatusAC = (isActive: boolean) => ({
    type: 'CHANGE-ALL-COMPANY-STATUS',
    isActive
}) as const

export const changeCompanyTitleAC = (companyID: string, isActive: boolean) => ({
    type: 'CHANGE-COMPANY-STATUS',
    companyID,
    isActive
}) as const


//* ThunkCreators *//

export const getTableStateTC = () => {
    return (dispatch: any) => {
        tableAPI.getTableState()
            .then((res) => {
                dispatch(getTableStateAC(res.data))
            })
    }
}

export const changeCompanyTitleTC = () => {
    return (dispatch: any) => {
        tableAPI.getTableState()
            .then((res) => {
                dispatch(getTableStateAC(res.data))
            })
    }
}





