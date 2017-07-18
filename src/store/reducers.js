/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js'
import { combineReducers } from 'redux'

//TODO: Remove/Replace Sample reducer
export const allTalks = (state = [], action) => {
    switch (action.type) {
        case C.ADD_TALK: {
            return [...state, action.payload]
        }
        case C.REMOVE_TALK: {
            console.log('reducer',action.payload)
            return state.filter((talk)=>parseInt(talk.id) !== parseInt(action.payload))
        }
        default:{
            return state
        }
    }
}

export default combineReducers({
    allTalks
})