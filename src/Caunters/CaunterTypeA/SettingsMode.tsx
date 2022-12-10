import React, {useState} from "react";
import s from "./CounterTypeA.module.css";
import Input from "./Input";
import Button from "./Button";

type SettingsModePropsType = {
    error: boolean
    setMaxHandler: (max: number, min: number) => void
    setStartHandler: (max: number, min: number) => void
    setSettingCounter: (min: number) => void
}
export const SettingsMode = (props: SettingsModePropsType) => {
    const [max, setMax] = useState<number>(0)
    const [min, setMin] = useState<number>(0)
    const callBackButton = () => {
        props.setSettingCounter(min)
    }
    return (
        <div className={s.settings}>
            <div className={s.setInput}>
                <Input callBack={(newValue) => (setMax(newValue))} value={max} name={'max value: '}
                       error={props.error || max < 0}/>
                <Input callBack={(newValue) => (setMin(newValue))} value={min} name={'min value: '}
                       error={props.error || min < 0}/>
            </div>
            <div className={s.setButton}>
                <Button callBack={callBackButton} name={'set'}
                        disable={props.error || min < 0 || max < 0}/>
            </div>
        </div>
    )
}