"use client";

import { useState, useEffect } from 'react';

import Grid from '../src/components/Gride';
import Navbar from './components/Navbar';
import Keyboard from './components/Keyboard';
import ModalWin from './components/ModalWin';
import ModalLoose from './components/ModalLoose';
import ModalPlay from './components/ModalPlay';

export default function App() {
    const [history, setHistory] = useState<string[]>([]);
    const [startGame, setStartGame] = useState(true);
    const [currentWord, setCurrentWord] = useState("");
    const [word, setWord] = useState("")
    const [displayWin, setDisplayWin] = useState(false)
    const [displayLose, setDisplayLose] = useState(false)
    const apiKey = import.meta.env.VITE_API_KEY

    const addLetter = (v: string) => {
        currentWord.length < word.length && setCurrentWord(prev => prev + v);
    }

    const handleEnter = () => {
        if(history.length === 5) {setDisplayLose(true); return};
        currentWord.length === word.length && currentWord.toLowerCase() === word.toLowerCase() && setDisplayWin(true)
        if (currentWord.length !== word.length ) { return }
        setHistory(prev => [ ...prev, currentWord ]);
        setCurrentWord("");
    };

    const deleteLetter = () => {
        setCurrentWord(prev => prev.slice(0, prev.length - 1));
    }

    const newGame = () => {
        setDisplayWin(false)
        setStartGame(false)
        setCurrentWord("")
        setHistory([])
    }

    useEffect(() => {
        fetch('/api/word?lang=fr', {
            headers: {
                'x-api-key' : apiKey
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setWord(data.word)
                console.log(data.word)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [displayWin == true]);

    return (
        <div className="App">
            <Navbar />
            <Grid history={history} maxAttempts={6} currentWord={currentWord} word={word} />
            <Keyboard history={history} word={word} addLetter={(v: string) => addLetter(v)} onReturn={deleteLetter} onEnter={handleEnter} />
            {startGame && <ModalPlay onPlay={newGame}/>}
            {displayWin && <ModalWin onPlay={newGame}/>}
            {displayLose && <ModalLoose onPlay={newGame}/>}
        </div>
    );
}