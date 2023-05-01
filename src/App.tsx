import React from 'react';
import {CounterTypeA} from "./Caunters/CaunterTypeA/CounterTypeA";
import {CounterTypeB} from "./Caunters/CaunterTypeB/CounterTypeB";
import s from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./store";
import {changeConditionAC} from "./VisionReducer";
import {MainPage} from "./firstTest/ui/mainPage";
import {Header} from "./firstTest/ui/Header";
import {TestRecaptcha} from "./recaptcha/testRecaptcha";

const App = () => {
    const dispatch = useDispatch()
    const vision = useSelector<RootReducerType, boolean>(state => state.vision.condition)
    const changeVisionHandler = () => {
        dispatch(changeConditionAC())
    }
    return (<>
            <TestRecaptcha/>
            <div className={s.app}>
                <Header/>
                <MainPage/>
            </div>
        </>
    );
};

export default App;
