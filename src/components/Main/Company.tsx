import React, {ChangeEvent} from 'react';
import styles from './main.module.css'
import {store, useAppDispatch, useAppSelector} from "../../store/store";
import {changeCompanyAddressTC, changeCompanyStatusAC, changeCompanyTitleTC} from "../../features/company-reducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";


export function Company() {

    const dispatch = useAppDispatch()

    const state = useAppSelector(() => store.getState().table.companyList);


    return (

        <div className={styles.company}>
            <ul>
                {state.map((company) => {
                    const onChangeIsActive = (e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(changeCompanyStatusAC(company.id, e.currentTarget.checked))

                    };

                    const changeCompanyTitle = (title: string) => {
                        dispatch(changeCompanyTitleTC(company.id, title))
                    };
                    const changeCompanyAddress = (title: string) => {
                        dispatch(changeCompanyAddressTC(company.id, title))
                    };

                    return (
                        <li key={company.id}>
                            <label className={company.isActive ? styles.isActive : ""}>
                                <input
                                    type="checkbox"
                                    onChange={onChangeIsActive}
                                    checked={company.isActive}
                                />
                                <EditableSpan
                                    title={company.company}
                                    changeTitle={changeCompanyTitle}/>
                                ,
                                Адрес: <EditableSpan
                                title={company.address}
                                changeTitle={changeCompanyAddress}/>,
                                Сотрудники: {company.employees.length}</label>
                        </li>
                    )
                })}
            </ul>


        </div>
    );
}