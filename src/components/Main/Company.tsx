import React, {ChangeEvent} from 'react';
import {store, useAppDispatch, useAppSelector} from "../../store/store";
import {changeCompanyAddressTC, changeCompanyStatusAC, changeCompanyTitleTC} from "../../features/company-reducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import '../../App.css'


export function Company() {

    const dispatch = useAppDispatch()

    const state = useAppSelector(() => store.getState().table.companyList);


    return (


        <tr>
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
                    <td key={company.id}>
                        <label className={company.isActive ? 'isActive' : ""}>
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
                    </td>
                )
            })}
        </tr>


    );
}