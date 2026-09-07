"use client";

import { FiDelete } from "react-icons/fi";
import { IoMdReturnLeft } from "react-icons/io";

type component = {
    addLetter: ( v: string ) => void;
    onReturn: () => void;
    onEnter: () => void;
}

export default function Keyboard({ addLetter, onReturn, onEnter } : component ) {

    const firstLine = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const secondLine = ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'];
    const thirdLine = ['W', 'X', 'C', 'V', 'B', 'N'];

    return (
        <div className="w-fit m-auto">
            <div className="flex flex-col gap-3 w-full">
                <div className="w-full flex items-center justify-center gap-2">
                    {firstLine.map((v, k) => (
                        <button onClick={() => addLetter(v)} key={k} className="w-[30px] h-[40px] shrink-0 bg-gray-700/60 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-700/40 transition duration-500">{v}</button>
                    ))}
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                    {secondLine.map((v, k) => (
                        <button onClick={() => addLetter(v)} key={k} className="w-[30px] h-[40px] shrink-0 bg-gray-700/60 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-700/40 transition duration-500">{v}</button>
                    ))}
                </div>
                <div className="flex items-center gap-2 w-full">
                    <button onClick={onEnter} className="basis-0 flex-1 min-w-0 flex-1 h-[40px] bg-gray-700/60 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-700/40 transition duration-500"><IoMdReturnLeft /></button>
                    {thirdLine.map((v, k) => (
                        <button onClick={() => addLetter(v)} key={k} className="w-[30px] h-[40px] shrink-0 bg-gray-700/60 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-700/40 transition duration-500">{v}</button>
                    ))}
                    <button onClick={onReturn} className="basis-0 flex-1 min-w-0 h-[40px] bg-gray-700/60 rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-gray-700/40 transition duration-500"><FiDelete /></button>
                </div>
            </div>
        </div>
    )
}