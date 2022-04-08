import React from 'react'

const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;
    return (
        <div className='complete-area'>
          <h2 className='title'>CompeleteTodos</h2>
            {todos.map((todo, index)=>{
              return (
                <div key={todo}>
                  <ul className='list-row'>
                    <li>{todo}</li>
                    <button onClick={()=>onClickBack(index)}>Back</button>
                  </ul>
                </div>
              )
            })}
        </div>
    )
}

export default CompleteTodos
