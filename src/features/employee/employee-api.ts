import {instance} from "../../api/api";


export const employeeApi = {
    changeEmployeeName(companyID: string, employeeID: string, title: string) {
        return instance.put(`/${companyID}/employees/${employeeID}`, {name: title})
    },
    changeEmployeePosition(companyID: string, employeeID: string, title: string) {
        return instance.put(`/${companyID}/employees/${employeeID}`, {position: title})
    }

}