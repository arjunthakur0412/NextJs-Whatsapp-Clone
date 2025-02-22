import { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ initalState, reducer, children }) => (
	<StateContext.Provider value={useReducer(reducer, initalState)}>
		{children}
	</StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
