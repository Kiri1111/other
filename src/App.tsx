import React from 'react';
import React1, {MouseEvent} from "react";
import './App.css';
import {Button} from "./Components/Button";

function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello im Vasya')
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('hello im Ivan')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    // const foo1 = () => {
    //     console.log(100200)
    // }
    //
    // const foo2 = (cifra: number) => {
    //     console.log(cifra)
    // }

    const Button1Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }

    const Button2Foo = (sub: string) => {
        console.log(sub)
    }

    return (
        <div className="App">
            {/*<button onClick={(event) => {*/}
            {/*    console.log('hello')*/}
            {/*}}>MyYouTubeChanel-1*/}
            {/*</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')*/}
            {/*}>MyYouTubeChanel-1*/}
            {/*</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')*/}
            {/*}>MyYouTubeChanel-2*/}
            {/*</button>*/}

            {/*<button onClick={c onClickHandler('some info')*/}

            {/*}>MyYouTubeChanel-3*/}
            {/*</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100200)}>2</button>*/}

            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}

            <Button name={'YouTubeChanel-1'} callBack={() => Button1Foo('I am Vasya', 21)}/>
            <Button name={'YouTubeChanel-2'} callBack={() => Button2Foo('I am Ivan')}/>
        </div>
    );
}


export default App;
