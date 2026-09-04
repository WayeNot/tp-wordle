import { FaWindowClose } from "react-icons/fa";

type components = {
    onClose: () => void;
}

export default function Archives( { onClose  } : components ) {
    return (
        <div className="bg-black/60">
            <div>
                <div>
                    <h2>Comment jouer ?</h2>
                    <FaWindowClose onClick={onClose} className="text-white"/>
                </div>
            </div>
        </div>
    )
}