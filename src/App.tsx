import React from 'react';
import {CounterTypeA} from "./Caunters/CaunterTypeA/CounterTypeA";
import {CounterTypeB} from "./Caunters/CaunterTypeB/CounterTypeB";
import s from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./store";
import {changeConditionAC} from "./VisionReducer";
import {Comp} from "./Debounce/newComponent/comp";

const App = () => {
    const dispatch = useDispatch()
    const vision = useSelector<RootReducerType, boolean>(state => state.vision.condition)
    const changeVisionHandler = () => {
        dispatch(changeConditionAC())
    }
    return (

        <div className={s.app}>
            {/*<button className={vision ? s.buttonA : s.buttonB} onClick={changeVisionHandler}>Change counter</button>*/}
            {/*{vision*/}
            {/*    ? <CounterTypeA/>*/}
            {/*    : <CounterTypeB/>*/}

            {/*}*/}
            <Comp/>
        </div>
    );
};

export default App;
