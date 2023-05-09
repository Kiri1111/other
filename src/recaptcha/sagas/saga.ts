// import todoSaga from "./todo/sagas";
//
// export function* rootSaga() {
//     yield all([fork(todoSaga)]);
// }
//
// import {createSelector} from "reselect";
//
// import {AppState} from "../rootReducer";
//
// const getPending = (state: AppState) => state.todo.pending;
//
// const getTodos = (state: AppState) => state.todo.todos;
//
// const getError = (state: AppState) => state.todo.error;
//
// export const getTodosSelector = createSelector(getTodos, (todos) => todos);
//
// export const getPendingSelector = createSelector(
//     getPending,
//     (pending) => pending
// );
//
// export const getErrorSelector = createSelector(getError, (error) => error);
//
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
//
// import {
//     getPendingSelector,
//     getTodosSelector,
//     getErrorSelector,
// } from "./store/todo/selectors";
// import { fetchTodoRequest } from "./store/todo/actions";
//
// const App = () => {
//     const dispatch = useDispatch();
//     const pending = useSelector(getPendingSelector);
//     const todos = useSelector(getTodosSelector);
//     const error = useSelector(getErrorSelector);
//
//     useEffect(() => {
//         dispatch(fetchTodoRequest());
//     }, []);
//
//     return (
//         <div style={{ padding: "15px" }}>
//     {pending ? (
//         <div>Loading...</div>
//     ) : error ? (
//         <div>Error</div>
//     ) : (
//         todos.map((todo, index) => (
//             <div style={{ marginBottom: "10px" }} key={todo.id}>
//         {++index}. {todo.title}
//         </div>
//     ))
//     )}
//     </div>
// );
// };
//
// export default App;