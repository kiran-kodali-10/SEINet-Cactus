import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Map from "./views/kepler-maps/Map";
import Admin from "./layout/Admin";


const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/" render={(props) => <Admin {...props} />} />
        </Switch>
        {/* <Map /> */}
      </BrowserRouter>
    </Provider>
  );
}

