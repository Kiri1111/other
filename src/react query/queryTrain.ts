import React from "react";
// import {
//     useQuery,
//     useMutation,
//     useQueryClient,
//     QueryClient,
//     QueryClientProvider,
// } from 'react-query';
//
// import { getTodos, postTodo } from '../api';
//
// // Создаем клиента
// const queryClient = new QueryClient();
//
// const App = () => (
//     // Передаем клиента в приложение
//     <QueryClientProvider client={queryClient}>
//         <Todos />
//         </QueryClientProvider>
// );
//
// function Todos() {
//     // Получаем доступ к клиенту
//     const queryClient = useQueryClient();
//
//     // Запрос
//     const query = useQuery('todos', getTodos);
//
//     // Мутация
//     const mutation = useMutation(postTodo, {
//         onSuccess: () => {
//             // Инвалидация и обновление
//             queryClient.invalidateQueries('todos');
//         },
//     });
//
//     return (
//         <div>
//             <ul>
//                 {query.data.map((todo) => (
//                         <li key={todo.id}>{todo.title}</li>
//                     ))}
//         </ul>
//
//         <button
//     onClick={() => {
//         mutation.mutate({
//             id: Date.now(),
//             title: 'Привет',
//         });
//     }}
// >
//     Добавить задачу
//     </button>
//     </div>
// );
// }
//
// render(<App />, document.getElementById('root'));