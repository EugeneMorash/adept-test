import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Company} from "./components/Main/Company";
import {Employee} from "./components/Main/Employee";

function App() {
    return (
        <div className='container'>
            <Header/>
            <Company/>
            <Employee/>
        </div>
    );
}

export default App;
