import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, Login, Registration } from "./containers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { registrationReducer, loginReducer } from "./redux/reducers";

const appReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
