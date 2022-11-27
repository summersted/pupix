import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { moviesReducer } from "./reducers/movieReducer";
import { serviceReducer } from "./reducers/serviseReducer";
import { usersReducer } from './reducers/usersReducer';

const midlwares = [
    thunk
];
const appReducer = combineReducers({
    movies: moviesReducer,
    appState: serviceReducer,
    users: usersReducer
    });

export const store = createStore(appReducer,
    composeWithDevTools(
        applyMiddleware(...midlwares)
    ));

