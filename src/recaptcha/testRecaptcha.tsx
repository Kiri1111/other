import React, {useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";


export const TestRecaptcha = () => {
    const [text, setText] = useState('')

    const onChangeHandler = (value: any) => {
        console.log('Captcha value', value)
    }
    return (
        <div>
            <form onSubmit={event => setText(event.currentTarget.value)}>
                <input/>

                <ReCAPTCHA
                    sitekey="6LeOy9ElAAAAAOzDBwQuldcPvjz9JIaSLh3GVszs"
                    onChange={onChangeHandler}
                />
                <button type={"submit"}>add</button>
                <h1>{text}</h1>
            </form>
        </div>
    );
};
