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
//

import ReactDOM from 'react-dom'

export const YoutubeVideo = () => {
    return <div>
        <VideoHeader/>
        <VideoContent/>
        <VideoStatistics/>
    </div>
}
export const VideoHeader = () => {
    return <div>
        😀 Заголовок видео
    </div>
}
export const VideoContent = () => {
    return <div>
        📼 Контент видео
    </div>
}
export const VideoStatistics = () => {
    return <div>
        📊 Статистика лайков
    </div>
}

ReactDOM.render(<div>YoutubeVideo</div>,
    document.getElementById('root')
);

//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода