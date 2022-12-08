import {companyApi, CompanyType, EmployeeType} from "./company-api";
import {changeCompanyTitleAC} from "./company-reducer";
import {AppThunkType} from "../store/store";

const initialState = {
    companyList: [] as CompanyType[],
    removeEmployeeList: [] as CompanyType[]
}

export type EmployeeStateType = typeof initialState

//* Types *//

export type EmployeeActionType =
    | addEmployeeAT

type addEmployeeAT = ReturnType<typeof addEmployeeAC>


export const employeeReducer = (employeeState: EmployeeStateType = initialState, action: EmployeeActionType): EmployeeStateType => {
    switch (action.type) {
        case 'ADD-EMPLOYEE':
            return {...employeeState}
        default:
            return employeeState;

    }
}


//* ActionCreators *//

export const addEmployeeAC = (companyID: string, employeeState: EmployeeType[]) => ({
    type: 'ADD-EMPLOYEE',
    companyID,
    employeeState
}) as const

const changeEmployeeNameAC = (companyID: string, employeeID: string, title: string) => ({
    type: 'CHANGE-EMPLOYEE-NAME',
    companyID,
    employeeID,
    title
}) as const


//* ThunkCreators *//

export const changeEmployeeNameTC = (companyID: string, employeeID: string, title: string): AppThunkType => {
    return (dispatch: any) => {
        companyApi.changeCompanyTitle(companyID, title)
            .then((res) => {
                dispatch(changeCompanyTitleAC(companyID, title))
            })
    }
}