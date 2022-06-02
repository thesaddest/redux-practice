import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const withdrawCash = (cash) => {
        dispatch({type: "WITHDRAW_CASH", payload: cash})
    }

    console.log(cash)
  return (
      <div className={'app'}>
          <div style={{fontSize:'3rem'}}>{cash}</div>
          <div style={{display: 'flex'}}>
              <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
              <button onClick={() => withdrawCash(Number(prompt()))}>WITHDRAW CASH</button>
          </div>
      </div>
  );
}

export default App;
