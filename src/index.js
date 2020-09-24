import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./components/App/App";
import AddItem from "./components/AddItem/AddItem";
import UpdateItem from "./components/UpdateItem/UpdateItem";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/items/add" component={AddItem} />
        <Route path="/items/update/:id" component={UpdateItem} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();