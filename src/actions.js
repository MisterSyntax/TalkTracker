/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const addTalk = talk => {
    let date = new Date()
    let id = date.getTime()
    talk.id = id
    talk.date = date
    return {
        type: C.ADD_TALK,
        payload: talk
    }

}

export const removeTalk = (id) => {
    return {
        type: C.REMOVE_TALK,
        payload: id
    }
}