import React, {ChangeEvent} from 'react';
import styles from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../store/store";
import {changeCompanyStatusAC} from "../../features/table-reducer";


export function Company() {

    const dispatch = useDispatch()

    const state = useSelector(() => store.getState().table.state);


    return (
        <div>
            <div className={styles.company}>
                <ul>
                    {state.map((company) => {
                        const onChangeIsActive = (e: ChangeEvent<HTMLInputElement>) => {
                            dispatch(changeCompanyStatusAC(company.id, e.currentTarget.checked))
                        };

                        return (
                            <li key={company.id}>
                                <label className={company.isActive ? styles.isActive : ""}>
                                    <input
                                        type="checkbox"
                                        onChange={onChangeIsActive}
                                    />
                                    {company.company},
                                    Адрес: {company.address},
                                    Сотрудники: {company.employees.length}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    );
}