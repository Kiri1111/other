import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";

const id1 = v1()
const id2 = v1()

const useCustomHook = (num: string) => {
    const [state, setState] = useState<any[]>([{id: '1', title: 'aa'}])

    const filteredState = () => {
        return state.filter(el => el.id !== id1)
    }

    const addToArr = (num: string) => {
        setState([...state, {id: num, title: 'bb'}])
    }

    return {addToArr, state, setState, filteredState}

}


export const Hooks = () => {

    const [num, setNum] = useState('')

    const {state, setState, addToArr, filteredState} = useCustomHook(num)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNum(e.currentTarget.value)
    }

    return (
        <div>
            Custom hook component

            <input type={"number"} onChange={onChangeHandler}/>
        </div>
    );
};

