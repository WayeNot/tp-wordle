"use client";

interface data {
    lettre : string;
    word : string;
    enter : boolean;
    del : boolean;
}

class Verif {
        lettre : string;
        word : string;
        key : number;

        constructor(lettre : string, word : string, key : number) {
            this.lettre = lettre;
            this.word = word;
            this.key = key;
        }

        isInTheWord() {
            return this.word.includes(this.lettre);
        }

        isGood() {
            return this.lettre == this.word[this.key];
        }
}


export default function Grid(props : data) {

    let tab : string[] = [];

    for(let i = 0; i > tab.length; i ++) {
    
        tab.push(props.lettre)

        if(props.del){
            tab.pop()
        }
        
        if(props.enter){
            const verif = new Verif(props.lettre, props.word, i);

            if(verif.isInTheWord()) {
                console.log("Lettre dans le mot mais mal placé = ORANGE")
            } else {
                console.log("Lettre pas dans le mot = GRIS")
            }

            if(verif.isGood()) {
                console.log("La lettre est bien placé = VERT")
            }
        }
    }

    return (
        <>
           <div className="flex items-center justify-center gap-5">
                {[tab].map((v,k) => (
                    <div key={k} className="bg-gray-500 w-20 h-20 flex justify-center items-center text-[40px] uppercase mt-10">{v}</div>
                ))}
           </div>
        </>
    )
}