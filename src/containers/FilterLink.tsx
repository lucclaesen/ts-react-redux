import {connect} from "react-redux";
import {setVisibilityFilter} from "../actions";
import Link, {LinkDispatcherProps, LinkStateProps} from "../components/Link"
import {AppState, Todo} from "../state";



// A container component as specified by react-redux gets passed three kinds of options:
// 1. state props
// 2. own props
// 3. Dispatcher callbacks

// Container components are much like controllers in that they mediate between models (store) and views (presentational components).
// There are two main responsibilities of ontainer components:
// 1. "lateral" / mid way passing of app data -> props of wrapped presentational components. In this case, the state of the visibilityFilter was not part of the props received from
//      upstream (in fact, the footer didn't passed any props), so 
// 2. projecting wrapped presentational components with the means to dispatch actions to the store

export type OwnProps = { filter: string};

const mapStateToProps = (state: AppState, ownProps: OwnProps) : LinkStateProps => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
}

// given a dispatch function, implements a function that dispatches an action to the store. This fucntion is passed to the wrapped presentational component via props. In this case,
// the Link component can register this function as a callback / event handler and will dispatch an action without needing a reference to the store.
const mapDispatchToProps = (dispatch, ownProps: OwnProps) : LinkDispatcherProps => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;