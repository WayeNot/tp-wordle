"use client";

import { BiSolidArchiveOut, BiStats } from 'react-icons/bi';
import { FaQuestion } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import HowToPlay from './NavBar/HowToPlay';
import { useState } from 'react';
import Settings from './NavBar/Settings';
import Archives from './NavBar/Archives';
import Stats from './NavBar/Stats';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<{ archive: boolean; stats: boolean; howToPlay: boolean; settings: boolean; }>({ archive: false, stats: false, howToPlay: false, settings: false });

    return (
        <>
            <div className="w-screen bg-gray-800 p-5">
                <nav className="flex items-center justify-between w-1/3 m-auto">
                    <div className="flex items-center gap-3 text-white text-[35px]">
                        <BiSolidArchiveOut onClick={() => setIsOpen({ ...isOpen, archive: !isOpen.archive})} className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
                        <BiStats onClick={() => setIsOpen({ ...isOpen, stats: !isOpen.stats})} className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
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
                        <FaQuestion onClick={() => setIsOpen({ ...isOpen, howToPlay: !isOpen.howToPlay})} className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
                        <IoSettingsSharp onClick={() => setIsOpen({ ...isOpen, settings: !isOpen.settings})} className="bg-gray-700/60 p-2 rounded-[5px] cursor-pointer hover:bg-gray-700 transition duration-500" />
                    </div>
                </nav>
            </div>
            {isOpen.archive && <Archives onClose={() => setIsOpen({ ...isOpen, archive: !isOpen.archive})} />}
            {isOpen.stats && <Stats onClose={() => setIsOpen({ ...isOpen, stats: !isOpen.stats})} />}
            {isOpen.howToPlay && <HowToPlay onClose={() => setIsOpen({ ...isOpen, howToPlay: !isOpen.howToPlay})} />}
            {isOpen.settings && <Settings onClose={() => setIsOpen({ ...isOpen, settings: !isOpen.settings})} />}
        </>
    )
}