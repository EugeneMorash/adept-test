import React, {ChangeEvent, useState} from 'react';
import '../../App.css'
import {store, useAppDispatch, useAppSelector} from "../../store/store";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {
    changeEmployeeNameTC,
    changeEmployeePositionTC,
    changeEmployeeStatusAC
} from "../../features/employee/employee-reducer";

export function Employee() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(() => store.getState().employee.companyList);

    const [isChecked, setIsChecked] = useState(false)


    return (
        <tr>
            {state.map((company) => {

                return company.isActive && company.employees.map((employee) => {
                    const changeEmployeeName = (title: string) => {
                        dispatch(changeEmployeeNameTC(company.id, employee.id, title))
                    };

                    const changeEmployeePosition = (title: string) => {
                        dispatch(changeEmployeePositionTC(company.id, employee.id, title))
                    };

                    const onChangeIsActive = (e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(changeEmployeeStatusAC(company.id, employee.id, e.currentTarget.checked))
                        setIsChecked(e.currentTarget.checked)
                    };

                    return (
                        <td key={employee.id}>
                            {console.log(employee.id, employee.isActive)}
                            <label className={employee.isActive ? 'isActive' : ""}>
                                <input
                                    type="checkbox"
                                    onChange={onChangeIsActive}
                                    // checked={isChecked}
                                />
                                <EditableSpan
                                    title={employee.name}
                                    changeTitle={changeEmployeeName}/> ,
                                Должность: <EditableSpan
                                title={employee.position}
                                changeTitle={changeEmployeePosition}/>
                            </label>
                        </td>
                    )
                })
            })
            }
        </tr>
    );
}
