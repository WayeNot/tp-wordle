"use client";

import { useState } from 'react';

import HowToPlay from './components/NavBar/HowToPlay';
import Grid from '../src/components/Gride';
import Navbar from './components/Navbar';
import Keyboard from './components/Keyboard';


export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <Grid lettre='t' word='toile' enter={true} del={false} />
            <Keyboard/>
        </div>
    );
}