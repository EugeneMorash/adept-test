import React from 'react';
import styles from './main.module.css'
import {store, useAppDispatch, useAppSelector} from "../../store/store";
import {EditableSpan} from "../EditableSpan/EditableSpan";

export function Employee() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(() => store.getState().table.companyList);
    console.log(state)

    return (
        <div className={styles.employee}>
            <ul>
                {state.map((company) => {
                    return company.isActive && company.employees.map((employee) => {
                        const changeEmployeeName = (title: string) => {
                            
                        };

                        return (
                            <li key={employee.id}>
                                ФИО: <EditableSpan title={employee.name} changeTitle={changeEmployeeName}/> ,
                                Должность: {employee.position}
                            </li>
                        )
                    })
                })
                }
            </ul>

        </div>
    );
}
