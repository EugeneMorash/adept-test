import React, {useEffect} from 'react';
import './App.css';
import {HeaderCompany} from "./components/Header/HeaderCompany";
import {Company} from "./components/Main/Company";
import {Employee} from "./components/Main/Employee";
import {useDispatch} from "react-redux";
import {getTableStateTC} from "./features/company-reducer";
import {HeaderEmployee} from "./components/Header/HeaderEmployee";

function App() {

    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(getTableStateTC())
    }, [dispatch])


    return (
        <table>
            <thead>
            <HeaderCompany/>
            </thead>
            <tbody>
            <Company/>
            </tbody>
            <thead>
            <HeaderEmployee/>
            </thead>
            <tbody>
            <Employee/>
            </tbody>
        </table>
    );
}

export default App;
