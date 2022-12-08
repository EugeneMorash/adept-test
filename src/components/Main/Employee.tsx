import React from 'react';
import {store, useAppDispatch, useAppSelector} from "../../store/store";
import {EditableSpan} from "../EditableSpan/EditableSpan";

export function Employee() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(() => store.getState().table.companyList);
    console.log(state)

    return (
        <tr>
            {state.map((company) => {
                return company.isActive && company.employees.map((employee) => {
                    const changeEmployeeName = (title: string) => {

                    };

                    return (
                        <td key={employee.id}>
                            ФИО: <EditableSpan title={employee.name} changeTitle={changeEmployeeName}/> ,
                            Должность: {employee.position}
                        </td>
                    )
                })
            })
            }
        </tr>
    );
}
