import React from 'react';
import Nativka from "./components/nativka";
import {BrowserRouter} from "react-router-dom";
import {CounterTypeA} from "./Caunters/CaunterTypeA/CounterTypeA";
import {CounterTypeB} from "./Caunters/CaunterTypeB/CounterTypeB";
import s from './App.module.css'

const App = () => {
    return (

        <div className={s.app}>

            {/*<BrowserRouter>*/}
            {/*    <Nativka/>*/}
            {/*</BrowserRouter>*/}
            {/*<CounterTypeA/>*/}
            <CounterTypeB/>
        </div>
    );
};

export default App;
