import React, { useContext} from 'react';

import { GameContext } from '../context/GameContext'
 
export default function Board() {
    const context = useContext(GameContext)
    console.log(context);
    return <h1>Board</h1>
}