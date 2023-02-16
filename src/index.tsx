// import React from 'react';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {createRoot} from 'react-dom/client';
// import {Provider} from "react-redux";
// import {store} from "./store";
//
// const container = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//


import React from 'react'
import ReactDOM from 'react-dom/client';

export const App = () => {
    return (
        <div>
            <h2>Что нужно прописать в консоли, чтобы создать новую ветку с названием login и перейти на нее ?</h2>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);

// 📜 Описание:
// Что нужно прописать в консоли, чтобы создать новую ветку с названием login и перейти на нее ?

// 🖥 Пример ответа: git create login
//git checkout -b ＜new-branch＞ noooooo