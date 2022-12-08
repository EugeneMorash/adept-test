import {CompanyType, companyApi} from "./company-api";
import {AppThunkType} from "../store/store";
import {AxiosError} from "axios";

const initialState = {
    companyList: [] as CompanyType[],
    removeCompanyList: [] as CompanyType[],
}

//* Types *//

export type CompanyStateType = typeof initialState

export type CompanyActionType =
    | getCompanyStateAT
    | changeCompanyStatusAT
    | changeAllCompanyStatusAT
    | changeCompanyTitleAT
    | changeCompanyAddressAT
    | addCompanyAT
    | deleteCompanyAT

type getCompanyStateAT = ReturnType<typeof getCompanyStateAC>
type changeCompanyStatusAT = ReturnType<typeof changeCompanyStatusAC>
type changeAllCompanyStatusAT = ReturnType<typeof changeAllCompanyStatusAC>
type changeCompanyTitleAT = ReturnType<typeof changeCompanyTitleAC>
type changeCompanyAddressAT = ReturnType<typeof changeCompanyAddressAC>
type addCompanyAT = ReturnType<typeof addCompanyAC>
type deleteCompanyAT = ReturnType<typeof deleteCompanyAC>


export const companyReducer = (companyState: CompanyStateType = initialState, action: CompanyActionType): CompanyStateType => {
    switch (action.type) {
        case 'GET-TABLE-STATE':
            return {...companyState, companyList: action.companyList}
        case 'CHANGE-COMPANY-STATUS':
            const companyList: CompanyType[] = companyState.companyList.map((c) => c.id === action.companyID ? {
                ...c,
                isActive: action.isActive
            } : c)

            const removeCompanyList: CompanyType[] = companyList.filter((company => company.isActive))

            return {
                ...companyState,
                companyList: companyList,
                removeCompanyList
            }
        case 'CHANGE-ALL-COMPANY-STATUS':

            return {
                ...companyState,
                companyList: companyState.companyList.map((c) => ({
                    ...c, isActive: action.isActive
                }))
            }
        case 'CHANGE-COMPANY-TITLE':
            return {
                ...companyState,
                companyList: companyState.companyList.map((c) => c.id === action.companyID ? {
                    ...c,
                    company: action.title
                } : c)
            }
        case 'CHANGE-COMPANY-ADDRESS':
            return {
                ...companyState,
                companyList: companyState.companyList.map((c) => c.id === action.companyID ? {
                    ...c,
                    address: action.title
                } : c)
            }
        case 'ADD-COMPANY':
            return {
                ...companyState,
                companyList: [action.company, ...companyState.companyList]
            }
        case "DELETE-COMPANY":
            return {
                ...companyState,
                companyList: companyState.companyList.filter((c) => !c.isActive)
            }
        default:
            return companyState;
    }
}


//* ActionCreators *//

export const getCompanyStateAC = (companyList: CompanyType[]) => ({
    type: 'GET-TABLE-STATE',
    companyList
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

export const changeCompanyTitleAC = (companyID: string, title: string) => ({
    type: 'CHANGE-COMPANY-TITLE',
    companyID,
    title
}) as const
export const changeCompanyAddressAC = (companyID: string, title: string) => ({
    type: 'CHANGE-COMPANY-ADDRESS',
    companyID,
    title
}) as const

export const addCompanyAC = (company: CompanyType) => ({
    type: 'ADD-COMPANY',
    company
}) as const

export const deleteCompanyAC = () => ({
    type: 'DELETE-COMPANY'
}) as const


//* ThunkCreators *//

export const getTableStateTC = () => {
    return (dispatch: any) => {
        companyApi.getTableState()
            .then((res) => {
                const companyList = res.data.map((company) => ({...company, isActive: false}))

                dispatch(getCompanyStateAC(companyList))
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
    }
}

export const changeCompanyTitleTC = (companyID: string, title: string): AppThunkType => {
    return (dispatch: any) => {
        companyApi.changeCompanyTitle(companyID, title)
            .then((res) => {
                dispatch(changeCompanyTitleAC(companyID, title))
            })
    }
}

export const changeCompanyAddressTC = (companyID: string, title: string): AppThunkType => {
    return (dispatch) => {
        companyApi.changeCompanyAddress(companyID, title)
            .then((res) => {
                dispatch(changeCompanyAddressAC(companyID, title))
            })
    }
}

export const deleteCompanyTC = (): AppThunkType => {
    return (dispatch, getState) => {
        const removeCompanyList = getState().table.removeCompanyList
        const requestList = removeCompanyList.map((company) => companyApi.deleteCompany(company.id))
        console.log(requestList)
        Promise.all(requestList)
            .then(() => {
                alert('All deleted')
                dispatch(deleteCompanyAC())
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
    }
}

export const addCompanyTC = () => {
    return (dispatch: any) => {
        companyApi.addCompany()
            .then((res) => {
                console.log(res.data)
                dispatch(addCompanyAC(res.data))
            })
    }

}




