import {instance} from "../api/api";

export type EmployeeType = {
    name: string
    position: string
    id: string
}
export type ResponseType = {
    company: string
    employees: EmployeeType[]
    id: string
    address: string
    isActive: boolean

}

export const tableAPI = {
    getTableState() {
        return instance.get<ResponseType[]>('/')
    },
    changeCompanyTitle() {
        return instance.put(`/`)
    }
}