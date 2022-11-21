// import React from 'react';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createRoot } from 'react-dom/client';
//
// const container  = document.getElementById('root') as HTMLElement
// const root = createRoot(container);
// root.render(<App />);
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//


import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<Array<string>>([])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setNewNote(e.currentTarget.value)
    const addNote = () => {
        setNotes([newNote, ...notes])
        setNewNote("")
    }
    return (
        <div>
            <textarea
                value={newNote}
                onChange={onChangeHandler}
                onBlur={addNote}
            />
            <div>
                <button
                    // onClick={xxx}
                    onClick={addNote}
                >Clear notes list
                </button>
            </div>
            <h4>Notes:</h4>
            <div>
                {notes.map(n => <p>{n}</p>)}
            </div>
        </div>
    )
}

ReactDOM.render(
    <Notes/>, document.getElementById('root')
);
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался?









