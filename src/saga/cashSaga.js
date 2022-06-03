import {put, takeEvery} from 'redux-saga/effects'
import {addCashAction, ASYNC_DECREMENT, ASYNC_INCREMENT, withdrawCashAction} from "../store/cashReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))


function* incrementWorker() {
    yield delay(1000)
    yield put(addCashAction(1000))

}

function* decrementWorker() {
    yield delay(1000)
    yield put(withdrawCashAction(1000))
}

export function* cashWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}