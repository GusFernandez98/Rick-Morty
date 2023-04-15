import {createStore, applyMiddleware, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import reducer from "../reducer/reducer";

//Es para conectar la extension del navegador -> reduxtools.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//recibe el reducer y lo que sigue es para hacer petisiones a un sv.
const store = createStore(reducer, composeEnhancer(applyMiddleware(ThunkMiddleware)));

export default store;