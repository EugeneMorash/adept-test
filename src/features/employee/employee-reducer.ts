import {CompanyType, EmployeeType} from "../company/company-api";
import {changeCompanyTitleAC} from "../company/company-reducer";
import {AppThunkType} from "../../store/store";
import {employeeApi} from "./employee-api";


const initialState = {
    companyList: [] as CompanyType[]
}

export type EmployeeStateType = typeof initialState

//* Types *//

export type EmployeeActionType =
    | addEmployeeAT
    | changeEmployeeNameAT
    | changeEmployeePositionAT
    | changeEmployeeStatusAT
    | getCompanyStateAT

type addEmployeeAT = ReturnType<typeof addEmployeeAC>
type changeEmployeeNameAT = ReturnType<typeof changeEmployeeNameAC>
type changeEmployeePositionAT = ReturnType<typeof changeEmployeePositionAC>
type changeEmployeeStatusAT = ReturnType<typeof changeEmployeeStatusAC>
type getCompanyStateAT = ReturnType<typeof getCompanyStateAC>


export const employeeReducer = (companyState: EmployeeStateType = initialState, action: EmployeeActionType): EmployeeStateType => {
    switch (action.type) {
        case 'GET-COMPANY-STATE':
            return {...companyState, companyList: action.companyList}
        case 'CHANGE-EMPLOYEE-STATUS':
            return {
                ...companyState,
                companyList: companyState.companyList.map((c) =>
                    c.id === action.companyID ? {
                        ...c, employees: c.employees.map((emp) => emp.id === action.employeeID ? {
                            ...emp,
                            isActive: action.isActive
                        } : emp)
                    } : c
                )
            }
        case 'ADD-EMPLOYEE':
            return {...companyState}
        case 'CHANGE-EMPLOYEE-NAME':
            return {...companyState}
        case 'CHANGE-EMPLOYEE-POSITION':
            return {...companyState}

        default:
            return companyState;
    }
}


//* ActionCreators *//

export const getCompanyStateAC = (companyList: CompanyType[]) => ({
    type: 'GET-COMPANY-STATE',
    companyList
}) as const

export const changeEmployeeStatusAC = (companyID: string, employeeID: string, isActive: boolean) => ({
    type: 'CHANGE-EMPLOYEE-STATUS',
    companyID,
    employeeID,
    isActive
}) as const

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

const changeEmployeePositionAC = (companyID: string, employeeID: string, title: string) => ({
    type: 'CHANGE-EMPLOYEE-POSITION',
    companyID,
    employeeID,
    title
}) as const


//* ThunkCreators *//

export const changeEmployeeNameTC = (companyID: string, employeeID: string, title: string): AppThunkType => {
    return (dispatch: any) => {
        employeeApi.changeEmployeeName(companyID, employeeID, title)
            .then((res) => {
                dispatch(changeCompanyTitleAC(companyID, title))
            })
    }
}

export const changeEmployeePositionTC = (companyID: string, employeeID: string, title: string): AppThunkType => {
    return (dispatch: any) => {
        employeeApi.changeEmployeePosition(companyID, employeeID, title)
            .then((res) => {
                dispatch(changeCompanyTitleAC(companyID, title))
            })
    }
}

