import React, {ChangeEvent, useState} from "react";


type FullInputProps = {
    sentMessage: (title: string) => void
}

export function FullInput(props: FullInputProps) {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.sentMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={
                onClickButtonHandler
            }>отправить
            </button>
        </div>
    );
}