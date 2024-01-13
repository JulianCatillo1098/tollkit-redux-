import React from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todoApi'

export const TodoApp = () => {
     const {data=[],isLoading} = useGetTodosQuery();
    // const {data,isLoading} = useGetTodoQuery(1);
    console.log ( 'data:', data )
  return (
  <>
  <h1> Todos -RTX query</h1>
  <hr/>
  <h4>isLoading: {isLoading? 'true':'false' }</h4>
  <pre>...</pre>

  <ul>{data.map(recorrer=>(
        <li key={recorrer.id}>
            <p>{recorrer.completed?'si':'no'}</p>
            {recorrer.title}</li>

    ))}
    </ul>
  <button>
    Next todo
  </button>
  </>
  )
}
