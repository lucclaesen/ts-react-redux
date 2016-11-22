import {Action} from "redux";
import {VisibilityFilterAction, actionTypes} from "../actions";
import {FilterState} from "../state";

const visibility = (given: string = FilterState.showAll, action: VisibilityFilterAction) : string => {
    switch(action.type) {
        case actionTypes.setVisibilityFilter: return action.payLoad;
        default: return given;
    }
}

export default visibility;
