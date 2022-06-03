import {all} from 'redux-saga/effects';
import {cashWatcher} from "./cashSaga";
import {customersWatcher} from "./userSaga";

export function* rootWatcher() {
    yield all([cashWatcher(), customersWatcher()])
}