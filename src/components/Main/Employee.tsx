import React from 'react';
import styles from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../store/store";

export function Employee() {
    const dispatch = useDispatch()
    const state = useSelector(() => store.getState().table.state);
    console.log(state)

    return (
        <div className={styles.employee}>
            <ul>
                {state.map((company) => {
                    return company.isActive && company.employees.map((employee) => {
                        return (
                            <li key={employee.id}>
                                ФИО: {employee.name},
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
