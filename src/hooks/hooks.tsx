import React, {useState} from 'react';
import {v1} from "uuid";

const id1 = v1()
const id2 = v1()

const useCustomHook = (num: number) => {
    const [state, setState] = useState<any[]>([{id: 1, title: 'aa'}])

    const filteredState = () => {
        return state.filter(el => el.id !== id1)
    }

    const addToArr = (num: number) => {
        setState([...state, {id: num, title: 'bb'}])
    }

    return {addToArr, state, setState, filteredState}

}


export const Hooks = () => {

    const num = 2

    const {state, setState, addToArr, filteredState} = useCustomHook(num)


    return (
        <div>
            Custom hook component
        </div>
    );
};

