import { combineReducers } from 'redux'
import { gitData } from './GitData'
import { searchType } from './SearchType'

export default combineReducers({
    gitData,
    searchType
})