"use client";

type props = {
    history: string[];
    currentWord: string;
    word: string;
    maxAttempts: number;
}

export default function Grid({ history, currentWord, word, maxAttempts = 6 }: props) {
    const rows = Array.from({ length: maxAttempts });

    const getColor = (letter: string, index: number) => {
        if (!letter) return "bg-gray-500";
        if (letter.toLowerCase() === word[index].toLowerCase()) return "bg-green-600";
        if (word.toLowerCase().includes(letter.toLowerCase())) return "bg-amber-500";
        return "bg-gray-700";
    }

    return (
        <div className="flex flex-col gap-3 items-center justify-center my-10">
            {rows.map((_, k) => {
                const isCurrentRow = k === history.length;
                const isSend = k < history.length;

                const rowWord = isSend ? history[k] : isCurrentRow ? currentWord : "";
                const letters = Array.from({ length: word.length }, (_, i) => rowWord[i] || "");
                return (
                    <div key={k} className="flex gap-2">
                        {letters.map((letter, colIndex) => {
                            const colorClass = isSend
                                ? getColor(letter, colIndex)
                                : "bg-gray-600/40 border border-gray-500/50";
                            return (
                                <div
                                    key={colIndex}
                                    className={`w-14 h-14 flex items-center justify-center text-2xl font-bold uppercase rounded text-white ${colorClass}`}
                                >
                                    {letter}
                                </div>
                            );
                        })}
                    </div>
                );
            })}

        </div>
    );
}