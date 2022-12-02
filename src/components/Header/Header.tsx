import React from 'react';
import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.company}>Компания</div>
            <div className={styles.employee}>Сотрудники</div>
        </div>
    );
}