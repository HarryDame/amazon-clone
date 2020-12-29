import React, {createContext, useContext, useReducer} from "react";

//Prepara el dataLayer
export const StateContext = createContext();

//Envuelve la app y provee el Data layer
export const StateProvider =({ reducer,
initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information del data layer
export const useStateValue = ()=> useContext(StateContext);