import { FaWindowClose } from "react-icons/fa";

type components = {
    onClose: () => void;
}

export default function HowToPlay({ onClose }: components) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadeIn">
            <div className=" w-2/7 m-auto p-5 rounded-[15px] font-bold text-white fixed inset-0 bg-gray-800 h-fit flex flex-col gap-7">
                <div className="flex items-center justify-between text-[20px]">
                    <h2 className="italic">Comment jouer ?</h2>
                    <button onClick={onClose} className="text-white bg-white/20 w-[30px] h-[30px] rounded-[7px] cursor-pointer hover:rotate-[180deg] transition duration-1000 hover:bg-white/10 hover:text-white/60">X</button>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-400 text-[14px]">Ce jeu reprend exactement le même concept que le <span className="text-white">Wordle</span>, mais en français.</p>
                    <p className="text-gray-400 text-[14px]">Chaque jour, un mot de 5 lettres est choisi aléatoirement. Vous devez le deviner en 6 essais.</p>
                    <p className="text-gray-400 text-[14px]">À chaque essai, les lettres du mot que vous avez proposé changeront de couleur en fonction de à quel point vous êtes proche de le trouver..</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        {['F', 'R', 'U', 'I', 'T'].map((v, k) => (
                            <div key={k} className={k === 0 ? "bg-green-600 w-[30px] h-[30px] rounded-[7px] flex items-center justify-center p-3 border-2 border-gray-600" : "w-[30px] h-[30px] rounded-[7px] flex items-center justify-center p-3 border-2 border-gray-600"}>{v}</div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-[14px]">La lettre <span className="text-green-500">F</span> est dans le mot, à la bonne place.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        {['P', 'O', 'C', 'H', 'E'].map((v, k) => (
                            <div key={k} className={v === 'C' ? "bg-orange-600 w-[30px] h-[30px] rounded-[7px] flex items-center justify-center p-3 border-2 border-gray-600" : "w-[30px] h-[30px] rounded-[7px] flex items-center justify-center p-3 border-2 border-gray-600"}>{v}</div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-[14px]">La lettre <span className="text-orange-500">C</span> est dans le mot, mais pas à la bonne place.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        {['S', 'O', 'E', 'U', 'R'].map((v, k) => (
                            <div key={k} className={v === 'R' ? "bg-gray-600/40 w-[30px] h-[30px] rounded-[7px] flex items-center justify-center p-3 border-2 border-gray-600" : "w-[30px] h-[30px] rounded-[7px] flex items-center justify-center p-3 border-2 border-gray-600"}>{v}</div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-[14px]">La lettre <span className="text-green-500">R</span> n'est pas dans le mot.</p>
                </div>
            </div>
        </div>
    )
}