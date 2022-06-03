const defaultState = {
    cash: 5
}

export const ADD_CASH = "ADD_CASH"
export const WITHDRAW_CASH = "WITHDRAW_CASH"
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}
        case WITHDRAW_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

export const addCashAction = (payload) => ({type: ADD_CASH, payload})
export const withdrawCashAction = (payload) => ({type: WITHDRAW_CASH, payload})
export const asyncIncrementAction = (payload) => ({type: ASYNC_INCREMENT, payload})
export const asyncDecrementAction = (payload) => ({type: ASYNC_DECREMENT, payload})