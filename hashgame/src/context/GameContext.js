import React, { createContext } from 'react';

export const GameContext = createContext();

export default function GameContextProvider({childen}) {
    return (<GameContext.Provider value="Alguma coisa">{childen}</GameContext.Provider>)
}