import {put, takeEvery, call} from 'redux-saga/effects'
import {addManyCustomersAction, FETCH_CUSTOMERS} from "../store/customersReducer";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')


function* fetchUsersWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(addManyCustomersAction(json))
}

export function* customersWatcher() {
    yield takeEvery(FETCH_CUSTOMERS, fetchUsersWorker)
}