import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {addCustomerAction, fetchCustomersAction, removeCustomerAction} from "./store/customersReducer";
import {decrement, increment} from "./toolkitRedux/toolkitReducer";


function App() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.toolkit.count)
    // const customers = useSelector(state => state.customers.customers)
    //
    // const addCash = (cash) => {
    //     dispatch(addCashAction(cash))
    // }
    //
    // const withdrawCash = (cash) => {
    //     dispatch(withdrawCashAction(cash))
    // }

    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    console.log(count)
  return (
      <div className={'app'}>
          <div style={{fontSize:'3rem'}}>{count}</div>
          <div style={{display: 'flex'}}>
              <button onClick={() => dispatch(increment())}>ADD CASH</button>
              <button onClick={() => dispatch(decrement())}>WITHDRAW CASH</button>
              <button onClick={() => dispatch(fetchCustomersAction())}>GET CUSTOMERS FROM DATABASE</button>
              <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER</button>
          </div>
          {/*{customers.length*/}
          {/*    ?*/}
          {/*    <div>*/}
          {/*        {customers.map(customer =>*/}
          {/*          <div*/}
          {/*              key={customer.name}*/}
          {/*              style={{fontSize: "2rem", marginTop:"1rem"}}*/}
          {/*              onClick={() => removeCustomer(customer)}*/}
          {/*          >*/}
          {/*              {customer.name}*/}
          {/*          </div>*/}
          {/*        )}*/}
          {/*    </div>*/}
          {/*    :*/}
          {/*    <div style={{fontSize: "2rem", marginTop:"1rem"}}>*/}
          {/*        Customers are not defined*/}
          {/*    </div>*/}
          {/*}*/}
      </div>
  );
}

export default App;
