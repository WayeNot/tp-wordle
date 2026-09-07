"use client";

import { useState } from 'react';

import Grid from '../src/components/Gride';
import Navbar from './components/Navbar';
import Keyboard from './components/Keyboard';


export default function App() {
    const [history, setHistory] = useState<string[]>([]);
    const [currentWord, setCurrentWord] = useState("");

    const word = 'toile';

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

    return (
        <div className="App">
            <Navbar />
            <Grid history={history} maxAttempts={6} currentWord={currentWord} word={word} />
            <Keyboard addLetter={(v: string) => addLetter(v)} onReturn={deleteLetter} onEnter={handleEnter} />
        </div>
    );
}