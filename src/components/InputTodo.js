import React from 'react'

const style = {
    backgroundColor: '#c1ffff',
    width: '400px',
    height: '30px',
    borderRadius: '8px',
    padding: '8px',
    margin: '8px'
}

const InputTodo = (props) => {

    const {todoText, onChange, onClick, disabled} = (props);

    return (
        <div style={style}>
            <input disabled={disabled}
                   placeholder='write your todo' 
                   value={todoText}
                   onChange={onChange}
            ></input>
            <button onClick={onClick}
                    disabled={disabled}
            >Add</button>
        </div>
    )
};

export default InputTodo;