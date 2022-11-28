import React, {useEffect, useState} from 'react';
import s from './CounterTypeA.module.css'
import Button from "./Button";
import Input from "./Input";


export function CounterTypeA() {

    const [a, setA] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)

    const onclickHandlerInc = () => {
        setA(a => a + 1);
        localStorage.setItem('number', JSON.stringify(a + 1))
    }

    const onclickHandlerReset = () => setA(start)

    const setSettingCounter = () => {
        setA(start);
        localStorage.setItem('min', JSON.stringify(start))
        localStorage.setItem('max', JSON.stringify(max))
    }
    const setStartHandler = (value: number) => {

        start >= max || start < 0 ? setError(true) : setError(false)
        setStart(value)
        // setText(true)
    }

    const setMaxHandler = (value: number) => {

        max <= start || max < 0 ? setError(true) : setError(false)
        setMax(value)
        // setText(true)

    }


    useEffect(() => {
        let key = localStorage.getItem('number')
        if (key) {
            let localA = JSON.parse(key)
            setA(localA)
        }
    }, [])

    useEffect(() => {
        let key = localStorage.getItem('min')
        if (key) {
            let localA = JSON.parse(key)
            setStart(localA)
        }
    }, [])

    useEffect(() => {
        let key = localStorage.getItem('max')
        if (key) {
            let localA = JSON.parse(key)
            setMax(localA)
        }
    }, [])


    return (
        <div className={s.all}>

            <div className={s.settings}>
                <div className={s.setInput}>
                    <Input callBack={setMaxHandler} value={max} name={'max value: '} error={error || max < 0}/>
                    <Input callBack={setStartHandler} value={start} name={'start value: '} error={error || start < 0}/>
                </div>
                <div className={s.setButton}>
                    <Button callBack={setSettingCounter} name={'set'}
                            disable={error || start < 0 || max < 0}/>
                </div>
            </div>
            <div className={s.counter}>
                <div className={a === max ? s.num2 : s.num1}>{error ?
                    <div className={s.textError}> Incorrect value!</div> : a}</div>
                <div className={s.buttonsArea}>
                    <div className={s.inc}>
                        <Button callBack={onclickHandlerInc}
                                name={'inc'}
                                disable={a === max || error}
                        />
                    </div>
                    <div className={s.reset}>
                        <Button callBack={onclickHandlerReset}
                                name={'reset'}
                                disable={a === start || error}
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}


