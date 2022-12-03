import React from 'react';
import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.company}>
                <input type="checkbox"/>
                <span>Компании</span>
            </div>
            <div className={styles.employee}>
                <input type="checkbox"/>
                <span>Сотрудники</span></div>
        </div>
    );
}