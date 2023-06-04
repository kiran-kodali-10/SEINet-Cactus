import React, { useEffect } from "react";
import keplerGlReducer, { uiStateUpdaters } from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Map from "./views/kepler-maps/Map";
import Admin from "./layout/Admin";
import NotFound from "./404_Error";

const customizedKeplerGlReducer = keplerGlReducer
  .initialState({
    uiState: {
      // hide side panel to disallower user customize the map
      readOnly: true,

      // customize which map control button to show
      mapControls: {
        ...uiStateUpdaters.DEFAULT_MAP_CONTROLS,
        visibleLayers: {
          show: false
        },
        mapLegend: {
          show: true,
          active: true
        },
        toggle3d: {
          show: false
        },
        splitMap: {
          show: false
        }
      }
    }
  })
  // handle additional actions
  .plugin({
    HIDE_AND_SHOW_SIDE_PANEL: (state, action) => ({
      ...state,
      uiState: {
        ...state.uiState,
        readOnly: !state.uiState.readOnly
      }
    })
  });

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));


export default function App() {
  useEffect(()=>{
    console.log("insider app.js")
  })
  return (
    <Provider store={store}>
      {/* <HashRouter> */}
        <BrowserRouter basename="/SEINet-Cactus">
        <Switch>
          <Route exact path="/map" render={(props) => <Admin {...props} />} />
          <Route exact path="/wordart" render={(props) => <Admin {...props} />} />
          <Route exact path="/species-data" render={(props) => <Admin {...props} />} />
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
      {/* </HashRouter> */}
    </Provider>
  );
}

