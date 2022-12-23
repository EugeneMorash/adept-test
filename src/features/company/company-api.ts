import {instance} from "../../api/api";
import {v1} from "uuid";


export type EmployeeType = {
    name: string
    position: string
    id: string
    isActive: boolean
}
export type CompanyType = {
    id: string
    company: string
    employees: EmployeeType[]
    address: string
    isActive: boolean

}

export const companyApi = {
    getCompanyState() {
        return instance.get<CompanyType[]>('/')
    },
    changeCompanyTitle(companyID: string, title: string) {
        return instance.put(`/${companyID}`, {company: title})
    },
    changeCompanyAddress(companyID: string, title: string) {
        return instance.put(`/${companyID}`, {address: title})
    },
    deleteCompany(companyID: string) {
        return instance.delete(`/${companyID}`)
    },
    addCompany() {
        return instance.post('/', {
            id: v1(),
            company: 'Введите название',
            employees: [],
            address: 'Введите адрес',
            isActive: false
        })
    }

}