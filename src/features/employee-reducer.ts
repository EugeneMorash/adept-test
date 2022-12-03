import {EmployeeType} from "./table-api";

const initialState = {
    employeeState: [] as EmployeeType[]
}

//* Types *//

// export type EmployeeActionType =
//     | readEmployeeStateAT

// type readEmployeeStateAT = ReturnType<typeof readEmployeeStateAC>


// export const employeeReducer = (state: EmployeeType[] = initialState, action: EmployeeActionType): EmployeeType[] => {
//     switch (action.type) {
//         case 'READ-EMPLOYEE-STATE':
//             return {...state, employeeState: action.employeeState}
//         default:
//             return state
//
//     }
// }
//
//
// //* ActionCreators *//
//
// export const readEmployeeStateAC = (companyID: string, employeeState: EmployeeType[]) => ({
//     type: 'READ-EMPLOYEE-STATE',
//     companyID,
//     employeeState
// }) as const