import React from 'react';
//
//            <h3>1 вопрос</h3>
// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {ххх}</div>
//     </div>
// }
//
// //Что нужно написать вместо ххх, что бы код работал?
// Ans:props.description
//           <h3>2 вопрос</h3>
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={xxx} n={yyy} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
//
// // Что нужно написать вместо xxx и yyy?
// // Ответ дайте через пробел, например: blabla onClick(props)
//
//           <h3>3 вопрос</h3>
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={xxx} />
//         <UserWallet wallet={yyy} />
//     </div>
// }
// ANS:wallets[0] wallets[1]
//              <h3>4 вопрос</h3>
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
//             <h3>5 вопрос</h3>
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// // Чему равно results.length?
// ANS:2
//
//             <h3>6 вопрос</h3>
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: typeof setUsers?
// ANS:function
//             <h3>7 вопрос</h3>
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]xx
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]xx
//
//     const [usersList, setUsersList] = useState<Array<UserType>>(XXX)
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо XXX, чтобы код работал?
// // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // ❗ Ответ дать минимально возможным объёмом кода
// ANS:state
//              <h3>8 вопрос</h3>
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     // const olderThen25Users = users.xxx(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?
// ANS:filter
//
//             <h3>9 вопрос</h3>
//
// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // console.log((typeof e) === ххх)
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );
//
// // Какой тип данных представляет аргумент функции-обработчика?
// // Что надо написать вместо ххх, что бы в консоль вывело true?
// //             <h3>10 вопрос</h3>
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             {/*<button onClick={() => props.deleteUser(xxx)}>x</button>*/}
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо xxx, чтобы код работал?
//
//
//             <h3>11 вопрос</h3>
//
//
//             <h3>12 вопрос</h3>
//
//
//             <h3>10 вопрос</h3>
//
// import React from 'react';
// //
// //            <h3>1 вопрос</h3>
// //type UserPropsType = {
// //     name: string
// //     description: string
// // }
// // export const User: React.FC<UserPropsType> = (props) => {
// //     return <div>
// //         <h1>Имя: {props.name}</h1>
// //         //<div>Описание: {ххх}</div>
// //     </div>
// // }
// //
// // //Что нужно написать вместо ххх, что бы код работал?
// //Ans:props.description
// //           <h3>2 вопрос</h3>
// //type PagePropsType = {
// //     age: number
// //     name: string
// //     avatarUrl: string
// // }
// // const Page: React.FC<PagePropsType> = (props) => {
// //     return <User a={xxx} n={yyy} />
// // }
// // type UserPropsType = {
// //     a: number
// //     n: string
// // }
// // export const User: React.FC<UserPropsType> = (props) => {
// //     return <div>name: {props.n}, age: {props.a}</div>
// // }
// //
// // // Что нужно написать вместо xxx и yyy?
// // // Ответ дайте через пробел, например: blabla onClick(props)
//
// //           <h3>3 вопрос</h3>
// //type UserWalletType = {
// //     title: string
// //     amount: number
// // }
// // type UserWalletPropsType = {
// //     wallet: UserWalletType
// // }
// //
// // export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
// //     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// // }
// //
// // export const UserMoney = () => {
// //     const wallets = [
// //         {title: 'bitcoin', amount: 1},
// //         {title: '$', amount: 100}
// //     ]
// //
// //     return <div>
// //         <UserWallet wallet={xxx} />
// //         <UserWallet wallet={yyy} />
// //     </div>
// // }
// //ANS:wallets[0] wallets[1]
// //              <h3>4 вопрос</h3>
// //import ReactDOM from 'react-dom'
// //
// // const Son = (props: any) => {
// //     return <div>
// //         I am son. My name is {props.name}
// //     </div>
// // }
// //
// //
// // const Father = (props: any) => {
// //     return <div>
// //         I am father. My name is {props.name}
// //         <Son name={props.sonName} />
// //     </div>
// // }
// //
// // const Granny = (props: any) => {
// //     return <div>
// //         I am granny. My name is {props.name}
// //         <Father name={props.fatherName} sonName={props.sonName} />
// //     </div>
// // }
// //
// // export const App = () => {
// //     return <div>
// //         <Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/>
// //     </div>
// // }
// //
// // ReactDOM.render(<App/>,
// //     document.getElementById('root')
// // )
// //             <h3>5 вопрос</h3>
// //
// //import React, {useState} from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// //
// // function UsersList() {
// //     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
// //
// //     const users = results[0]
// //     const setUsers = results[1]
// //
// //     return (
// //        <p>Тут будет список пользователей</p>
// //     )
// // }
// //
// // ReactDOM.render(
// //     <UsersList/>, document.getElementById('root')
// // );
// //
// // // Чему равно results.length?
// //ANS:2
// //
// //             <h3>6 вопрос</h3>
// //import React, {useState} from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// //
// // function UsersList() {
// //     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
// //     return (
// //        <p>Тут будет список пользователей</p>
// //     )
// // }
// //
// // ReactDOM.render(
// //     <UsersList/>, document.getElementById('root')
// // );
// // // Что вернёт выражение: typeof setUsers?
// //ANS:function
// //             <h3>7 вопрос</h3>
// //import React, {useState} from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// //
// // type UserType = {
// //     id: number
// //     name: string
// //     age: number
// // }
// //
// // function User(props: UserType) {
// //     return (
// //         <li>User {props.name}: {props.age} y.o.</li>
// //     )
// // }
// //
// // function UsersList() {
// //     const state = [
// //         {id: 1, name: "Bob", age: 34},
// //         {id: 2, name: "Alex", age: 25},
// //         {id: 3, name: "Ann", age: 30},
// //         {id: 4, name: "John", age: 23},
// //     ]
// //     const users = [
// //         {id: 1, userName: "Bob", age: 34},
// //         {id: 2, userName: "Alex", age: 25},
// //         {id: 3, userName: "Ann", age: 30},
// //         {id: 4, userName: "John", age: 23},
// //     ]
// //
// //     const [usersList, setUsersList] = useState<Array<UserType>>(XXX)
// //     return (
// //         <main>
// //             <h5>User list:</h5>
// //             <p>Тут будет список пользователей</p>
// //         </main>
// //     )
// // }
// //
// // ReactDOM.render(
// //     <UsersList/>, document.getElementById('root')
// // );
// // // Что надо написать вместо XXX, чтобы код работал?
// // // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // // ❗ Ответ дать минимально возможным объёмом кода
// //ANS:state
// //              <h3>8 вопрос</h3>
// //import React, {useState} from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// //
// // type UserType = {
// //     id: number
// //     name: string
// //     age: number
// // }
// //
// // function User(props: UserType) {
// //     return (
// //         <li>User {props.name}: {props.age} y.o.</li>
// //     )
// // }
// //
// // function UsersList() {
// //     const data: Array<UserType> = [
// //         {id: 1, name: "Bob", age: 25},
// //         {id: 2, name: "Alex", age: 28},
// //         {id: 3, name: "Ann", age: 23},
// //         {id: 4, name: "John", age: 30},
// //     ]
// //     const [users, setUsers] = useState<Array<UserType>>(data)
// //     // Пользователи старше 25 лет:
// //     // const olderThen25Users = users.xxx(u => u.age > 25)
// //     return (
// //         <main>
// //             <h4>User list:</h4>
// //             <ul>
// //                 {/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}
// //             </ul>
// //         </main>
// //     )
// // }
// //
// // ReactDOM.render(
// //     <UsersList/>, document.getElementById('root')
// // );
// // // Что надо написать вместо xxx, чтобы код работал?
// //ANS:filter
// //
// //             <h3>9 вопрос</h3>
// //
// //import React, {MouseEvent} from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// //
// // function Button() {
// //     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
// //         // console.log((typeof e) === ххх)
// //     }
// //     return <button onClick={onClickHandler} >Click</button>
// // }
// //
// //
// // ReactDOM.render(
// //     <Button/>, document.getElementById('root')
// // );
// //
// // // Какой тип данных представляет аргумент функции-обработчика?
// // // Что надо написать вместо ххх, что бы в консоль вывело true?
// //             <h3>10 вопрос</h3>
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             {/*<button onClick={() => props.deleteUser(xxx)}>x</button>*/}
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?
// ANS:props.id
//
//
// //             <h3>11 вопрос</h3>
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 // xxx
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы инпут был контролируемым?
// ANS:value={userName}
//
// //             <h3>12 вопрос</h3>
//
//
// //             <h3>10 вопрос</h3>
// //
