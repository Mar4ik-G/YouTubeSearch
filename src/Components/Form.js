import React from "react";


const Form = () => {
    function Finder() {
        console.log('Hello World!')
    }
    return (
        <form onSubmit={Finder()}>
            <input type="text"/>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;