import React, {useState} from "react";

// export type CounterProps = {
//     title: string
// }

export const Counter = (props: any) => {
    const [count, setCount] = useState(0)


    let onClickHandler = () => {
        setCount(count + 1)
    }
    return <div onClick={onClickHandler}><h1>{count}</h1>
        <div></div>
    </div>

}