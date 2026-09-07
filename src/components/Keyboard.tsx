"use client";

import { FiDelete } from "react-icons/fi";
import { IoMdReturnLeft } from "react-icons/io";

type component = {
    history: string[];
    word: string;
    addLetter: (v: string) => void;
    onReturn: () => void;
    onEnter: () => void;
}

export default function Keyboard({ history, word, addLetter, onReturn, onEnter }: component) {

    const firstLine = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const secondLine = ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];
    const thirdLine = ['W', 'X', 'C', 'V', 'B', 'N'];

    const getKeyColor = (letter: string) => {
        const l = letter.toLowerCase();
        const target = word.toLowerCase();
        let status = 'default';

        for (const guess of history) {
            const g = guess.toLowerCase();
            for (let i = 0; i < g.length; i++) {
                if (g[i] === l) {
                    if (target[i] === l) {
                        return "bg-green-600 text-white font-bold";
                    }
                    if (target.includes(l)) {
                        status = "bg-amber-500 text-white";
                    } else if (status === 'default') {
                        status = "bg-gray-900/80 text-gray-400";
                    }
                }
            }
        }

        if (status === "default") {
            return "bg-gray-700/60 text-white hover:bg-gray-700/40"
        }
        return status;
    }

    const keyClass = "w-[30px] h-[40px] shrink-0 rounded-[5px] flex items-center justify-center cursor-pointer transition duration-500";

    return (
        <div className="w-fit m-auto">
            <div className="flex flex-col gap-3 w-full">
                <div className="w-full flex items-center justify-center gap-2">
                    {firstLine.map((v, k) => (
                        <button onClick={() => addLetter(v)} key={k} className={`${keyClass} ${getKeyColor(v)}`}>{v}</button>
                    ))}
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                    {secondLine.map((v, k) => (
                        <button onClick={() => addLetter(v)} key={k} className={`${keyClass} ${getKeyColor(v)}`}>{v}</button>
                    ))}
                </div>
                <div className="flex items-center gap-2 w-full">
                    <button onClick={onEnter} className="basis-0 flex-1 min-w-0 h-[40px] bg-gray-700/60 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-700/40 transition duration-500"><IoMdReturnLeft /></button>
                    {thirdLine.map((v, k) => (
                        <button onClick={() => addLetter(v)} key={k} className={`${keyClass} ${getKeyColor(v)}`}>{v}</button>
                    ))}
                    <button onClick={onReturn} className="basis-0 flex-1 min-w-0 h-[40px] bg-gray-700/60 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-700/40 transition duration-500"><FiDelete /></button>
                </div>
            </div>
        </div>
    );
}