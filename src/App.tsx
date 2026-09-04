"use client";

import { useState } from 'react';
import { BiSolidArchiveOut, BiStats } from 'react-icons/bi';
import { FaQuestion } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';


import HowToPlay from '../src/components/HowToPlay';
import Grid from '../src/components/Gride';


export default function App() {
    const [howToPlay, setHowToPlay] = useState(false);

    return (
        <div className="App">
            <div className="w-screen bg-gray-800 p-5">
                <nav className="flex items-center justify-between w-1/3 m-auto">
                    <div className="flex items-center gap-3 text-white text-[35px]">
                        <BiSolidArchiveOut className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
                        <BiStats className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
                    </div>
                    <div className="flex items-center gap-6 uppercase text-white font-bold text-[18px] ">
                        <div className="flex items-center gap-2">
                            <div className="w-[30px] h-[30px] bg-green-600 rounded-[7px] flex items-center justify-center">L</div>
                            <p>e</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[30px] h-[30px] bg-orange-400 rounded-[7px] flex items-center justify-center">M</div>
                            <p>o</p>
                            <p>t</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-white text-[35px]">
                        <FaQuestion onClick={() => setHowToPlay(true)} className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
                        <IoSettingsSharp className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
                    </div>
                </nav>
            </div>
            {howToPlay && <HowToPlay/>}
            <Grid />
        </div>
    );
}