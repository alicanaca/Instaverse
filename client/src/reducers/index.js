import { combineReducers } from "redux";
import stories from './stories'
import users from './authentication'

export default combineReducers({
    stories,
    users
})