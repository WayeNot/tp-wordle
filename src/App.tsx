"use client";

import { useState } from 'react';

import Grid from '../src/components/Gride';
import Navbar from './components/Navbar';
import Keyboard from './components/Keyboard';
import ModalWin from './components/ModalWin';


export default function App() {
    const [history, setHistory] = useState<string[]>([]);
    const [currentWord, setCurrentWord] = useState("");
    const [word, setWord] = useState("toile")

    const addLetter = (v: string) => {
        currentWord.length < word.length && setCurrentWord(prev => prev + v);
    }

    const handleEnter = () => {
        if (currentWord.length !== word.length ) { return }
        setHistory(prev => [ ...prev, currentWord ]);
        setCurrentWord("");
    };

    const deleteLetter = () => {
        setCurrentWord(prev => prev.slice(0, prev.length - 1));
    }

    const newGame = () => {
        setWord("test");
        setCurrentWord("")
        setHistory([])
    }

    return (
        <div className="App">
            <Navbar />
            <Grid history={history} maxAttempts={6} currentWord={currentWord} word={word} />
            <Keyboard history={history} word={word} addLetter={(v: string) => addLetter(v)} onReturn={deleteLetter} onEnter={handleEnter} />
            {currentWord.toLowerCase() === word.toLowerCase() && <ModalWin onPlay={newGame}/>}
        </div>
    );
}