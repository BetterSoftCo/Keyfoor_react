import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

function Increase_Decrease() {
    const [number, setNumber] = useState(0);

    function handleDecrease () {
        if(number !== 0) {
            setNumber(number - 1);
        } else {
            setNumber(0);
        }
    };
    function handleIncrease () {
        setNumber(number + 1);
    };

    return (  
        <div className="Increase_Decrease">
            <button className="button-minus" onClick={handleDecrease}>
                <AiOutlineMinus size="1.5em" className="icon-minus"/>
            </button>
            <h5 className="number">
                {number}
            </h5>
            <button className="button-plus" onClick={handleIncrease}>
                <AiOutlinePlus size="1.5em" className="icon-plus"/>
            </button>
        </div>
    );
}

export default Increase_Decrease;