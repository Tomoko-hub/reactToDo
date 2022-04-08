import React from 'react'

const style = {
  backgroundColor: '#c6ffe2',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px'
}
const IncompleteTodo = (props) => {
    const {todos, onClickComplete, onClickDelete} = props;

    return (
        <div style={style}>
          <h2 className='title'>IncompleteTodos</h2>
          <div>
            {todos.map((todo, index)=>{
              return (
                <div key={todo}>
                  <ul className='list-row'>
                    <li>{todo}</li>
                    <button onClick={()=>onClickComplete(index)}>Complete</button>
                    <button onClick={()=>onClickDelete(index)}>Delete</button>
                  </ul>
                </div>
                );
              })}
          </div>
        </div>
    )
};

export default IncompleteTodo;