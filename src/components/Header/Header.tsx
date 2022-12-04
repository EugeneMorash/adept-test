import React, {ChangeEvent} from 'react';
import styles from './Header.module.css'
import {changeAllCompanyStatusAC} from "../../features/table-reducer";
import {useDispatch} from "react-redux";

export function Header() {
    const dispatch = useDispatch()

    const onChangeIsAllActive = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAllCompanyStatusAC(e.currentTarget.checked))
    };

    return (
        <div className={styles.header}>
            <div className={styles.company}>
                <input
                    type="checkbox"
                    onChange={onChangeIsAllActive}
                />
                <span>Компании</span>
            </div>
            <div className={styles.employee}>
                <input type="checkbox"/>
                <span>Сотрудники</span></div>
        </div>
    );
}