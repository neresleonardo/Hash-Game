import React from "react";

import Board from '../components/Board'
import GameContextProvider from "../context/GameContext";


export default function Home() {
    return (
        <GameContextProvider>
            <Board/>
            <h1>Ola</h1>
        </GameContextProvider>
    )
}