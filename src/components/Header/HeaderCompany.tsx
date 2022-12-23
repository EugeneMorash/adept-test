import React, {ChangeEvent} from 'react';
import {addCompanyTC, changeAllCompanyStatusAC, deleteCompanyTC} from "../../features/company/company-reducer";
import {useAppDispatch} from "../../store/store";

export function HeaderCompany() {
    const dispatch = useAppDispatch()

    const onChangeIsAllActive = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAllCompanyStatusAC(e.currentTarget.checked))
    };

    function onDeleteCompanyHandler() {
        dispatch(deleteCompanyTC())
    }

    const onAddCompanyHandler = () => {
        dispatch(addCompanyTC())
    };


    return (
        <tr>
            <th>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            onChange={onChangeIsAllActive}/>
                        <span>Выделить все</span>
                    </label>

                    <span>Компании</span>
                    <button onClick={onDeleteCompanyHandler}>Удалить</button>
                    <button onClick={onAddCompanyHandler}>Добавить</button>
                </div>
            </th>

        </tr>
    );
}