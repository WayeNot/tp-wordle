type components = {
    onClose: () => void;
}

export default function Archives({ onClose }: components) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadeIn">
            <div className=" w-2/7 m-auto p-5 rounded-[15px] font-bold text-white fixed inset-0 bg-gray-800 h-fit flex flex-col gap-7">
                <div className="flex items-center justify-between text-[20px]">
                    <h2 className="italic">Historiques de partie</h2>
                    <button onClick={onClose} className="text-white bg-white/20 w-[30px] h-[30px] rounded-[7px] cursor-pointer hover:rotate-[180deg] transition duration-1000 hover:bg-white/10 hover:text-white/60">X</button>
                </div>
                <h2>Coming soon..</h2>
            </div>
        </div>
    )
}