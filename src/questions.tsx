import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
// // Reducer
// const initState = {
//   animals: [
//     {likes: 0, name: 'cat'},
//     {likes: 0, name: 'dog'},
//     {likes: 0, name: 'fish'},
//     {likes: 0, name: 'spider'},
//     {likes: 0, name: 'bird'},
//   ] as { likes: number, name: string }[]
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'LIKE':
//       return {
//         ...state,
//         animals: state.animals.map(animal => {
//           return true ? {...animal} : animal
//         })
//       }
//   }
//   return state
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const like = (likes: any, name: any) => ({type: 'LIKE', likes, name} as const)
// type ActionsType = ReturnType<typeof like>
//
// // Components
// export const Animals = () => {
//   const animals = useAppSelector(state => state.app.animals)
//   const dispatch = useAppDispatch()
//
//   const mapped = animals
//     .map((a: any, i: number) => (
//       <div key={i}>
//         {a.name}
//         -{a.likes}-
//         <button
//           onClick={() => dispatch(like(a.likes + 1, a.name))}
//         >
//           Like!
//         </button>
//       </div>
//     ))
//
//
//   return (
//     <div>
//       {mapped}
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//   </Provider>
// );
//
// // 📜 Описание:
// // На экране отображен список животных.
// // Кликните на like и вы увидите, что ничего не происходит.
// // Ваша задача починить лайки.
// // В качестве ответа укажите исправленную версию строки
// // answ :                    onClick={() => dispatch(like(++a.likes, a.name))} NNNNOOOOOOO
// // 🖥 Пример ответа: -{a.likes + 1}-
//2
//import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useState } from 'react'
//
// // Styles
// const modal: React.CSSProperties = {
//   position: 'fixed',
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   overflow: 'auto',
//   backgroundColor: 'rgba(23,26,38,0.26)'
// }
//
// const modalContent: React.CSSProperties = {
//   backgroundColor: '#fefefe',
//   margin: '15% auto',
//   padding: '20px',
//   border: '1px solid #888',
//   width: '80%'
// }
//
//
// // Reducer
// const initState = {goodThings: [] as any[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'LIKE':
//       return {
//         ...state,
//         goodThings: [action.thing, ...state.goodThings]
//       }
//   }
//   return state
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const addThing = (thing: any) => ({type: 'LIKE', thing} as const)
// type ActionsType = ReturnType<typeof addThing>
//
// const Modal = (props: any) => {
//   return (
//     <div style={modalContent}>
//       modal:
//       <input
//         value={props.value}
//         onChange={e => props.setValue(e.target.value)}
//       />
//       <button onClick={props.add}>add</button>
//     </div>
//   )
// }
//
// // Components
// export const Animals = () => {
//   const goodThings = useAppSelector(state => state.app.goodThings)
//   const dispatch = useAppDispatch()
//
//   const [value, setValue] = useState('')
//   const [show, setShow] = useState(false)
//
//   const mapped = goodThings.map((t: any, i: number) => <div key={i}>{t}</div>)
//
//   return (
//     <div style={modal}>
//       <button onClick={() => setShow(true)}>show modal</button>
//
//       {show && (
//         <Modal
//           value={value}
//           setValue={setValue}
//           add={() => {
//             dispatch(addThing(value))
//             setValue('')
//           }}
//         />
//       )}
//
//       {mapped}
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//   </Provider>
// );
//
// // 📜 Описание:
// // Откройте модалку, введите любой текст и нажмите add.
// // Введенный текст отобразится снизу, но модалка останется по прежнему видимой.
//
// // 🪛 Задача:
// // Необходимо сделать так, чтобы модалка пряталась сразу после добавления элемента
// // В качестве ответа укажите строку коду, которую необходимо добавить для реализации данной задачи
//answ setShow(false)
// // 🖥 Пример ответа: closeModal(true)
//3
//import React, { useState } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
//
// // Styles
// const modal: React.CSSProperties = {
//   position: 'fixed',
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   overflow: 'auto',
//   backgroundColor: 'rgba(23,26,38,0.26)'
// }
//
// const modalContent: React.CSSProperties = {
//   backgroundColor: '#fefefe',
//   margin: '15% auto',
//   padding: '20px',
//   border: '1px solid #888',
//   width: '80%'
// }
//
// // Reducer
// const initState = {tasks: [] as any[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'ADD_TASK':
//       return {
//         ...state,
//         tasks: [action.task, ...state.tasks]
//       }
//     case 'CHANGE_TASK':
//       return {
//         ...state,
//         tasks: [action.task, ...state.tasks.filter((t: any) => t.id !== action.task.id)]
//       }
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const addTask = (task: any) => ({type: 'ADD_TASK', task} as const)
// const changeTask = (task: any) => ({type: 'CHANGE_TASK', task} as const)
// type ActionsType = ReturnType<typeof addTask> | ReturnType<typeof changeTask>
//
// // Components
// const Modal = (props: any) => {
//   const [value, setValue] = useState(props.task?.name || '')
//
//   return (
//     <div style={modalContent}>
//       modal:
//       <input
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//       <button onClick={() => props.callback(value)}>{props.title}</button>
//     </div>
//   )
// }
//
// const Task = (props: any) => {
//   const [show, setShow] = useState(false)
//
//   return (
//     <div>
//       {props.task.name}
//       <button onClick={() => setShow(true)}>change</button>
//       {show && (
//         <Modal
//           callback={(value: string) => {
//             props.change(value)
//             setShow(false)
//           }}
//           title={'change'}
//         />
//       )}
//     </div>
//   )
// }
//
// export const Todolist = () => {
//   const tasks = useAppSelector(state => state.app.tasks)
//   const dispatch = useAppDispatch()
//   const [show, setShow] = useState(false)
//
//   const getId = () => tasks.reduce((acc: number, t: any) => acc > t.id ? acc : t.id, 0) + 1
//
//   const mapped = tasks.map((t: any) => (
//     <Task
//       key={t.id}
//       task={t}
//       change={(value: string) => dispatch(changeTask({id: t.id, name: value}))}
//     />
//   ))
//
//   return (
//     <div style={modal}>
//       <button onClick={() => setShow(true)}>open modal</button>
//       {show && (
//         <Modal
//           callback={(value: string) => {
//             dispatch(addTask({id: getId(), name: value}))
//             setShow(false)
//           }}
//           title={'add'}
//         />
//       )}
//       {mapped}
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Todolist/>
//   </Provider>
// );
//
// // 📜Описание:
// // Откройте модалку и добавьте какой-нибудь текст.
// // Теперь попробуйте изменить этот текст.
// // При изменении существующей таски в инпуте не отображается старые данные.
// // Ваша задача починить это поведение.
// //
// // В качестве ответа укажите строку кода, которую нужно изменить или добавить,
// // чтобы реализовать данную задачу
// // answ task={props.task}
// // 🖥 Пример ответа: defaultValue={value}
//4
//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
// // Reducer
// const initState = {
//   work: 0,
//   donate: 0,
//   balance: 0,
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'CHANGE_VALUE':
//       return {
//         ...state,
//         ...action.payload,
//       }
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const changeValue = (payload: any) => ({type: 'CHANGE_VALUE', payload} as const)
// type ActionsType = ReturnType<typeof changeValue>
//
// // Components
// export const Income = () => {
//   const work = useAppSelector(state => state.app.work)
//   const donate = useAppSelector(state => state.app.donate)
//   const balance = useAppSelector(state => state.app.balance)
//
//   const dispatch = useAppDispatch()
//
//   return (
//     <div>
//       <div>
//         work: <input value={work}
//                      type={'number'}
//                      onChange={e => dispatch(changeValue({work: +e.target.value}))}/>
//       </div>
//       <div>
//         donate: <input value={donate}
//                        type={'number'}
//                        onChange={e => dispatch(changeValue({donate: +e.target.value}))}/>
//       </div>
//
//       <h1>💵 balance: {balance}</h1>
//       <button
//         onClick={() => {
//           // ❗❗❗ XXX ❗❗❗
//         }}
//       >
//         calculate balance
//       </button>
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Income/>
//   </Provider>
// );
//
// // 📜 Описание:
// // Что нужно написать вместо XXX, чтобы вывелась сумма дохода в строке баланса
// //answ    dispatch(changeValue({balance: donate + work}))
// // 🖥 Пример ответа: console.log(work + donate)
//5
//import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useEffect } from 'react'
// import axios from 'axios'
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: 'collapse',
//   width: '100%',
//   tableLayout: 'fixed',
// }
//
// const th: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black',
//   background: 'lightgray',
//   cursor: 'pointer'
// }
//
// const td: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black'
// }
//
// // Types
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers() {
//     return instance.get<UsersResponseType>('users')
//   },
// }
//
// // Reducer
// const initState = {
//   users: [] as UserType[],
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users})
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//   api.getUsers()
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// // Components
// export const Users = () => {
//   const users = useAppSelector(state => state.app.users)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(getUsersTC())
//   }, [])
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//         <tr>
//           <th style={th}> Name</th>
//           <th style={th}> Age</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           users.map(u => (
//             <tr key={u.id}>
//               <td style={td}>{u.name}</td>
//               <td style={td}>{u.age}</td>
//             </tr>
//           ))
//         }
//         </tbody>
//       </table>
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Users/>
//   </Provider>
// );
//
// // 📜 Описание:
// // Перед вами пустая таблица. Пользователи не подгрузились, т.к. в коде допущена ошибка
// // Ваша задача найти багу, чтобы таблица с пользователями подгрузилась.
// // В качестве укажите исправленную строку кода
// // ❗ Есть несколько вариантов решения данной задачи, в ответах учтены различные варианты
//answ :         case 'SET-USERS':
// // 🖥 Пример ответа: {users.map(u) => таблица отрисуйся ВЖУХ ВЖУХ}
//6
//import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useEffect } from 'react'
// import axios from 'axios'
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: 'collapse',
//   width: '100%',
//   tableLayout: 'fixed',
// }
//
// const th: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black',
//   background: 'lightgray',
//   cursor: 'pointer'
// }
//
// const td: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black'
// }
//
// // Types
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
// type ParamsType = {
//   sortBy: string | null
//   sortDirection: 'asc' | 'desc' | null
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers(params?: ParamsType) {
//     return instance.get<UsersResponseType>('users', {params})
//   },
// }
//
// // Reducer
// const initState = {
//   users: [] as UserType[],
//   params: {
//     sortBy: null,
//     sortDirection: 'asc'
//   } as ParamsType
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     case 'SET_PARAMS':
//       return {...state, params: {...state.params, ...action.payload}}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users} as const)
// const setParamsAC = (payload: ParamsType) => ({type: 'SET_PARAMS', payload} as const)
// type ActionsType =
//   | ReturnType<typeof setUsersAC>
//   | ReturnType<typeof setParamsAC>
//
// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//   const params = getState().app.params
//   api.getUsers(params.sortBy ? params : undefined)
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// export const Users = () => {
//   const users = useAppSelector(state => state.app.users)
//   const sortBy = useAppSelector(state => state.app.params.sortBy)
//   const sortDirection = useAppSelector(state => state.app.params.sortDirection)
//   console.log(users, sortBy, sortDirection)
//
//   const dispatch = useAppDispatch()
//
//   // ❗❗❗ XXX ❗❗❗
//
//   const sortHandler = (name: string) => {
//     const direction = sortDirection === 'asc' ? 'desc' : 'asc'
//     dispatch(setParamsAC({sortBy: name, sortDirection: direction}))
//   };
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//       <table style={table}>
//         <thead>
//         <tr>
//           <th style={th} onClick={() => sortHandler('name')}>
//             Name
//           </th>
//           <th style={th} onClick={() => sortHandler('age')}>
//             Age
//           </th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//           users.map(u => {
//             return (
//               <tr key={u.id}>
//                 <td style={td}>{u.name}</td>
//                 <td style={td}>{u.age}</td>
//               </tr>
//             )
//           })
//         }
//         </tbody>
//       </table>
//     </div>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Users/>
//   </Provider>
// );
//
// // 📜 Описание:
// // Перед вами таблица с пользователями. Но данные не подгружаются
// // Что нужно написать вместо XXX, чтобы:
// // 1) Пользователи подгрузились
// // 2) Чтобы работала сортировка по имени и возрасту
// // 3) Направление сортировки тоже должно работать (проверить можно нажав на одно и тоже поле 2 раза)
//answ :   useEffect(() => {dispatch(getUsersTC())}, [sortBy, sortDirection])
// // 🖥 Пример ответа: console.log(users, sortBy, sortDirection)
//7
//
//8
//
//9
//
//10
//
//
//
//
//
//
