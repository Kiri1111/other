import React from 'react';

const Exams = () => {
    return (
        <div>
            <h1>экзамен 2</h1>

            <h3>1 вопрос</h3>
            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            function UsersList() {
            const results = useState<any>(["Bob", "Alex", "Ann"])
            const users = results[0]
            const setUsers = results[1]

            return (
            <p>Тут будет список пользователей</p>
            )
        }

            ReactDOM.render(
            <UsersList/>, document.getElementById('root')
            );

            // Какой тип правильнее указать вместо "any" при типизации стэйта?
ghfdb

            <h3>2 вопрос</h3>
            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            function UsersList() {
            const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

            return (
            <p>Тут будет список пользователей!</p>
            )
        }

            ReactDOM.render(
            <UsersList />, document.getElementById('root')
            );

            // Что вернёт выражение: typeof useState?


            <h3>3 вопрос</h3>

            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            function UsersList() {
            const results = useState<Array<string>>(["Bob", "Alex", "Ann"])

            const users = results[0]
            const setUsers = results[1]

            return (
            <p>Тут будет список пользователей</p>
            )
        }

            ReactDOM.render(
            <UsersList/>, document.getElementById('root')
            );

            // Чему равно results.length?

            <h3>4 вопрос</h3>


            <h3>5 вопрос</h3>


            <h3>6 вопрос</h3>
            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            function UsersList() {
            const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

            return (
            <main>
            <h4>User list:</h4>
            <ul>
        { users.ХХХ(user => <li>{user}</li> )}
            </ul>
            </main>
            )
        }

            ReactDOM.render(
            <UsersList/>, document.getElementById('root')
            );
            // Что надо вставить вместо ХХХ, чтобы код заработал? ответ map
            <h3>7 вопрос</h3>
            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            function UsersList() {
            const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
            const getUser = (user: string) => <li>{user}</li>
            const usersList = users.map(XXX)

            return (
            <main>
            <h4>User list:</h4>
            <ul>
        {usersList}
            </ul>
            </main>
            )
        }

            ReactDOM.render(
            <UsersList/>, document.getElementById('root')
            );

            // Что надо вставить вместо XXX, чтобы код заработал?
            // ❗ Ответ дать минимально возможным объёмом кода


            <h3>8 вопрос</h3>
            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            function UsersList() {
            const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
            const getUser = (user: string) => <li>{user}</li>
            const usersList = users.map(getUser)

            return (
            <main>
            <h4>User list:</h4>
            <ul>
        {usersList}
            </ul>
            </main>
            )
        }

            ReactDOM.render(
            <UsersList/>, document.getElementById('root')
            );
            // Что вернёт выражение: Array.isArray(usersList)?


            <h3>9 вопрос</h3>
            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            function UsersList() {
            const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
            const getUser = (user: string) => <li>{user}</li>

            return (
            <main>
            <h4>User list:</h4>
            <ul>
        {users.map(getUser)}
            </ul>
            </main>
            )
        }

            ReactDOM.render(
            <UsersList/>, document.getElementById('root')
            );
            // Что вернёт выражение: typeof getUser?

            <h3>10 вопрос</h3>
            import React, {useState} from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';

            type UserType = {
            id: number
            name: string
            age: number
        }

            function User(props: UserType) {
            return (
            <li>User {props.name}: {props.age} y.o.</li>
            )
        }

            function UsersList() {
            const state = [
        {id: 1, name: "Bob", age: 34},
        {id: 2, name: "Alex", age: 25},
        {id: 3, name: "Ann", age: 30},
        {id: 4, name: "John", age: 23},
            ]
            const users = [
        {id: 1, userName: "Bob", age: 34},
        {id: 2, userName: "Alex", age: 25},
        {id: 3, userName: "Ann", age: 30},
        {id: 4, userName: "John", age: 23},
            ]

            const [usersList, setUsersList] = useState<Array<UserType>>(XXX)
            return (
            <main>
            <h5>User list:</h5>
            <p>Тут будет список пользователей</p>
            </main>
            )
        }

            ReactDOM.render(
            <UsersList/>, document.getElementById('root')
            );
            // Что надо написать вместо XXX, чтобы код работал?
            // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
            // ❗ Ответ дать минимально возможным объёмом кода



        </div>
    );
};

export default Exams;