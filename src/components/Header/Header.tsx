import React, {ChangeEvent} from 'react';
import styles from './Header.module.css'
import {addCompanyTC, changeAllCompanyStatusAC, deleteCompanyTC} from "../../features/company-reducer";
import {useAppDispatch} from "../../store/store";

export function Header() {
    const dispatch = useAppDispatch()

    const onChangeIsAllActive = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAllCompanyStatusAC(e.currentTarget.checked))
    };

    function onDeleteCompanyHandler() {
        dispatch(deleteCompanyTC())
    }

    const onDeleteEmployeeHandler = () => {

    };

    const onAddCompanyHandler = () => {
        dispatch(addCompanyTC())
    };

    const onAddEmployeeHandler = () => {

    };

    return (
        <div className={styles.header}>
            <div className={styles.company}>
                <input
                    type="checkbox"
                    onChange={onChangeIsAllActive}
                />
                <span>Компании</span>
                <button onClick={onDeleteCompanyHandler}>Удалить</button>
                <button onClick={onAddCompanyHandler}>Добавить</button>
            </div>
            <div className={styles.employee}>
                <input type="checkbox"/>
                <span>Сотрудники</span>
                <button onClick={onDeleteEmployeeHandler}>Удалить</button>
                <button onClick={onAddEmployeeHandler}>Добавить</button>
            </div>

        </div>
    );
}