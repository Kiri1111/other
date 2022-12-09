import React, {useEffect, useState} from 'react';
import SuperButton from "./Payload/SuperButton";
import InputBlock from "./Payload/InputBlock";
import s from "./CounterTypeB.module.css"

export const CounterTypeB = () => {

    const [value, setValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(true)

    const changeSetting = () => setPage(!page)
    const incOnclickHandler = () => {
        setValue(value => value + 1)
        localStorage.setItem('Value', JSON.stringify(value + 1))
    }
    const resetOnclickHandler = () => setValue(min)
    const setOnclickHandler = () => {
        setValue(min)
        setPage(!page)
        localStorage.setItem('Max value', JSON.stringify(max))
        localStorage.setItem('Min value', JSON.stringify(min))
    }
    const onChangeMinHandler = (minValue: number) => {
        setMin(minValue)
        max <= min ? setError(true) : setError(false)
    }
    const onChangeMaxHandler = (max: number) => {
        setMax(max)
        max <= min ? setError(true) : setError(false)
    }

    useEffect(() => {
        let storageValue = localStorage.getItem('Value')
        let storageMin = localStorage.getItem('Min value')
        let storageMax = localStorage.getItem('Max value')
        setValue(Number(storageValue))
        setMin(Number(storageMin))
        setMax(Number(storageMax))
    }, [])

    return (
        <div className={s.all}>
            <div className={s.allCounter}>
                {page ?
                    <div>
                        <div className={max === value ? s.valueMax : s.value}>
                            {error ? <div className={s.errorText}>'incorrect data'</div> : value}
                        </div>
                        <div className={s.buttonsValue}>
                            <SuperButton disabled={value === max || error || min < 0 || max < 0}
                                         callBack={incOnclickHandler}
                                         title={"inc"}/>
                            <SuperButton disabled={value < max || error}
                                         callBack={resetOnclickHandler}
                                         title={'reset'}/>
                            <SuperButton callBack={changeSetting} title={'settings'}/>

                        </div>
                    </div>
                    :
                    <InputBlock
                        setOnclickHandler={setOnclickHandler}
                        onChangeMinHandler={onChangeMinHandler}
                        onChangeMaxHandler={onChangeMaxHandler}
                        min={min}
                        max={max}
                        disabled={error}
                        error={error}
                    />}
            </div>

        </div>);
};

