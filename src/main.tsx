import {Store, createStore} from "redux";
import Reducer from "./reducers";
import {AppState} from "./state";
import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App";

// create the store
let store: Store<AppState> = createStore(Reducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("main")
);

