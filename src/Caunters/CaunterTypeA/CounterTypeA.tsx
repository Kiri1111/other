import React, {useState} from 'react';
import s from './CounterTypeA.module.css'
import Button from "./Button";
import Input from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store";
import {changeMinValueAC, changeValueAC, resetValueAC} from "./reducers/ChangeValueReducer";
import {SettingsMode} from "./SettingsMode";


export function CounterTypeA() {
    const dispatch = useDispatch()
    const value = useSelector<RootReducerType, number>(state => state.value.value)

    // const [value, setValue] = useState<number>(0)
    // const [max, setMax] = useState<number>(0)
    // const [min, setMin] = useState<number>(0)
    let max = 0
    let min = 0
    const [error, setError] = useState<boolean>(false)

    const onclickHandlerInc = () => {
        dispatch(changeValueAC())
        // localStorage.setItem('number', JSON.stringify(value + 1))
    }
    const setSettingCounter = () => {
        dispatch(changeMinValueAC(min))
        // setValue(min);
        //  localStorage.setItem('min', JSON.stringify(min))
        //  localStorage.setItem('max', JSON.stringify(max))
    }
    const ResetValueHandler = (min: number) => {
        dispatch(resetValueAC(min))
    }
    const setStartHandler = (min: number, max: number) => {
        min > max || min < 0 ? setError(true) : setError(false)
        // setMin(newValue)
    }
    const setMaxHandler = (min: number, max: number) => {
        max < min || max < 0 ? setError(true) : setError(false)
        // setMax(newValue)
    }

    // useEffect(() => {
    //     let key = localStorage.getItem('number')
    //     if (key) {
    //         let localA = JSON.parse(key)
    //         setValue(localA)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let key = localStorage.getItem('min')
    //     if (key) {
    //         let localA = JSON.parse(key)
    //         setStart(localA)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let key = localStorage.getItem('max')
    //     if (key) {
    //         let localA = JSON.parse(key)
    //         setMax(localA)
    //     }
    // }, [])

    return (
        <div className={s.all}>
            <SettingsMode error={error} setMaxHandler={setMaxHandler} setStartHandler={setStartHandler}
                          setSettingCounter={setSettingCounter}/>
            {/*<div className={s.settings}>*/}
            {/*    <div className={s.setInput}>*/}
            {/*        <Input callBack={setMaxHandler} value={max} name={'max value: '} error={error || max < 0}/>*/}
            {/*        <Input callBack={setStartHandler} value={min} name={'min value: '} error={error || min < 0}/>*/}
            {/*    </div>*/}
            {/*    <div className={s.setButton}>*/}
            {/*        <Button callBack={setSettingCounter} name={'set'}*/}
            {/*                disable={error || min < 0 || max < 0}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={s.counter}>
                <div className={value === max ? s.num2 : s.num1}>{error ?
                    <div className={s.textError}> Incorrect value!</div> : value}</div>
                <div className={s.buttonsArea}>
                    <div className={s.inc}>
                        <Button callBack={onclickHandlerInc}
                                name={'inc'}
                                disable={value === max || error}
                        />
                    </div>
                    <div className={s.reset}>
                        <Button callBack={ResetValueHandler}
                                name={'reset'}
                                disable={value === min || error}
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}


