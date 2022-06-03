import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {addToDo, decrement, increment, removeLastToDo} from "./toolkitRedux/toolkitSlice";


const addAsyncTodo = () => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(addToDo('Async ToDo btw'))
        }, 2000)
    }
}

function App() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.toolkit.count)
    const todos = useSelector(state => state.toolkit.todos)

    console.log(count)
  return (
      <div className={'app'}>
          <div style={{fontSize:'3rem'}}>{count}</div>
          <div style={{display: 'flex'}}>
              <button onClick={() => dispatch(increment())}>INCREMENT</button>
              <button onClick={() => dispatch(decrement())}>DECREMENT</button>
              <button onClick={() => dispatch(removeLastToDo())}>DELETE LAST TODO</button>
              <button onClick={() => dispatch(addToDo(prompt()))}>ADD TODO</button>
              <button onClick={() => dispatch(addAsyncTodo())}>ADD ASYNC TODO</button>
          </div>
          {todos.map(todo =>
              <div>{todo}</div>
          )}
      </div>
  );
}

export default App;
