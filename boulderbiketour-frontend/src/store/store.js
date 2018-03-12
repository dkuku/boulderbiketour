import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import rootReducer from '../reducers/index';

//import some default data
const bikeRace =  {}
const boulderBikeRace = {}

const defaultState = {
    bikeRace,
    boulderBikeRace 

}

export const history = createHistory();

const store = createStore(rootReducer, defaultState, applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    
);

export default store;


