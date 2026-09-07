"use client"

type props = {
    onPlay: () => void;
}

export default function ModalWin({ onPlay } : props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadeIn">
            <div className=" w-2/7 m-auto p-5 rounded-[15px] font-bold text-white fixed inset-0 bg-gray-800 h-fit flex flex-col items-center gap-7">
                <h2 className="italic font-bold text-center">🏆 Bravo, vous avez gagné ! 🏆</h2>
                <button onClick={onPlay} className="text-white bg-green-500/80 p-2 rounded-[7px] cursor-pointer transition duration-1000 hover:bg-green-500/40 hover:text-white/60">Rejouer</button>
            </div>
        </div>
    )
}