import React, {ChangeEvent} from 'react';
import {changeAllCompanyStatusAC} from "../../features/company-reducer";
import {useAppDispatch} from "../../store/store";

export function HeaderEmployee() {
    const dispatch = useAppDispatch()

    const onChangeIsAllActive = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAllCompanyStatusAC(e.currentTarget.checked))
    };

    const onDeleteEmployeeHandler = () => {

    };

    const onAddEmployeeHandler = () => {

    };

    return (
        <tr>
            <th>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            // onChange={onChangeIsAllActive}
                        />
                        <span>Выделить все</span>
                    </label>
                    <span>Сотрудники</span>
                    <button onClick={onDeleteEmployeeHandler}>Удалить</button>
                    <button onClick={onAddEmployeeHandler}>Добавить</button>
                </div>
            </th>
        </tr>
    );
}