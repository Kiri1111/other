import React from 'react';
//
//            <h3>1 вопрос</h3>
//
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
//ANS:st_2.id
//             <h3>2 вопрос</h3>
//import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// export const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// export const changeUserStatus = (userID: number, status: string) => {
//     return users.xxx(u => u.id === userID ? {...u, status} : u)
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция changeUserStatus, которая меняет статус пользователя.
// // Что надо написать вместо ххх, чтобы функция работала корректно?
//ANS:map
//            <h3>3 вопрос</h3>
//
//import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//          [userID]: {...addresses[xxx], [key]: newValue}
//     }
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?
//
//             <h3>4 вопрос</h3>
//
//
//           <h3>5 вопрос</h3>
//
//
//
// //            <h3>7 вопрос</h3>
//
//
// //            <h3>8 вопрос</h3>
// //            <h3>9 вопрос</h3>
// //            <h3>1 вопрос</h3>
// //            <h3>1 вопрос</h3>
// //