import React, { useEffect } from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Map from "./views/kepler-maps/Map";
import Admin from "./layout/Admin";


const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));


export default function App() {
  useEffect(()=>{
    console.log("insider app.js")
  })
  return (
    <Provider store={store}>
      {/* <HashRouter> */}
        <BrowserRouter>
        <Switch>
          <Route exact path="/SEINet-Cactus/map" render={(props) => <Admin {...props} />} />
          <Route exact path="/SEINet-Cactus/wordart" render={(props) => <Admin {...props} />} />
          <Route exact path="/SEINet-Cactus/species-data" render={(props) => <Admin {...props} />} />
        </Switch>
        </BrowserRouter>
      {/* </HashRouter> */}
    </Provider>
  );
}

