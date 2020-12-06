import { bindActionCreators } from "redux";
import * as actions from './actionTypes'

export function bugAddedAction(description){
    return {
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    }
}

export function bugRemovedAction(id){
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id
        }
    }
}

