import React, {useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Filterrrr} from "./Components/Filterrrr";
import {Cars} from "./Components/Map";
import {FType} from "./Components/Filterrrr";
import {FullInput} from './Components/FullInput';

// const topCars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]

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

    // const Button1Foo = (sub: string, age: number) => {
    //     console.log(sub, age)
    // }
    //
    // const Button2Foo = (sub: string) => {
    //     console.log(sub)
    // }

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const sentMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])


    }

    return (
        <div className={'App'}>
            <div>
                <FullInput sentMessage={sentMessage}/>

            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}


        </div>



        // <div>
        //     <Filterrrr name={'Money, money, money!!!'}/>
        // </div>

        // <div className="App">
        //     <button onClick={(event) => {
        //         console.log('hello')
        //     }}>MyYouTubeChanel-1
        //     </button>
        //     <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')
        //     }>MyYouTubeChanel-1
        //     </button>
        //     <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')
        //     }>MyYouTubeChanel-2
        //     </button>
        //
        //     <button onClick={c onClickHandler('some info')
        //
        //     }>MyYouTubeChanel-3
        //     </button>
        //
        //     <button onClick={foo1}>1</button>
        //     <button onClick={() => foo2(100200)}>2</button>
        //
        //     <button>MyYouTubeChanel-1</button>
        //     <button>MyYouTubeChanel-2</button>
        //
        //     <Button name={'YouTubeChanel-1'} callBack={() => Button1Foo('I am Vasya', 21)}/>
        //     <Button name={'YouTubeChanel-2'} callBack={() => Button2Foo('I am Ivan')}/>
        //     {/*<Filter/>*/}
        // </div>
        // <div className='Map'>
        //     <Cars title='Ta4ki'
        //           topCars={topCars}
        //     />
        // </div>
    )
}


export default App;
