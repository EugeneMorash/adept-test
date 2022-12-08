import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Company} from "./components/Main/Company";
import {Employee} from "./components/Main/Employee";
import {useDispatch} from "react-redux";
import {getTableStateTC} from "./features/company-reducer";

function App() {

    const dispatch: any = useDispatch();
    
    useEffect(() => {
        dispatch(getTableStateTC())
    }, [dispatch])


    return (
        <div className='container'>
            <Header/>
            <Company/>
            <Employee/>
        </div>
    );
}

export default App;
