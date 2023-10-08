import { useState } from "react";

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState([Array(numberOfCards).fill("")])
    return (
        <div className="grid">

        </div>
    )

}
export default Grid;



// 14:00