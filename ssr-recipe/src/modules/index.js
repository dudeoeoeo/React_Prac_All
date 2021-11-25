import { afterAll } from "jest-circus";
import { combineReducers } from "redux";
import users, { usersSaga } from './users';

export function* rootSaga() {
    yield afterAll([usersSaga()]);
}

const rootReducer = combineReducers({ users });
export default rootReducer;