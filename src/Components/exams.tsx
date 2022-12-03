import React from 'react';
//
//             <h3>1 вопрос</h3>
//import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ XXX === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//           Меняю цвет по клику
//         </button>
//     )
// }
//
//
// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );
//ANS:isColored
// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
//            <h3>2 вопрос</h3>
//import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//
//      const usersList = (XXX === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//            </ul>
//
//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//                 {usersList}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );ANS:users.length
// // Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?
//            <h3>3 вопрос</h3>
//
//import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {XXX < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );
//ANS:password.length
// // Что надо вставить вместо XXX, чтобы код работал нормально?
//             <h3>4 вопрос</h3>
//
//type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут:  friends[3][1]?
//ans:"Michael"
//           <h3>5 вопрос</h3>
//type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<String>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//ANS:undefined
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[0].id][3]?
//           <h3>6 вопрос</h3>
//type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[xxx].includes(f)? result.push(f): null)
//     return result
// }
//
// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// // Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// // у двух выбранных студентов.
// //Функция принимает параметром два объекта типа StudentType
// // и возвращает массив с именами общих друзей,
// //если они есть и пустой массив, если таковых нету.
// // Что надо написать вместо ххх, чтобы функция работала?
//            <h3>7 вопрос</h3>
//
//           <h3>8 вопрос</h3>
//
//
//
//             <h3>9 вопрос</h3>
//
//             <h3>10 вопрос</h3>
//