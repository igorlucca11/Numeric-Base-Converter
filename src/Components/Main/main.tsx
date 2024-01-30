import { useState } from "react";
import NumberInput from "../NumberIn/numberInput";
import NumberOutput from "../Output/numberOutput";
import { Converter } from "../../converter";

function Main() {
    const [input, setInput] = useState("0");
    const [base, setBase] = useState(2);
    const [validInput, setValidInput] = useState(true);

    function inputHandler(event: HTMLInputElement) {
        const value = event.value.toString();
        if (value) {
            setInput(value);
            const filter = [...Converter.algarisms].slice(0, base);
            const check = value.split("").some((value) => !filter.includes(value));
            setValidInput(!check);
        } else {
            setInput("");
        }
    }
    function baseHandler(event: HTMLSelectElement) {
        const value = event.value;
        if (value) {
            setBase(Number(value));
            setInput("0");
        }
    }
    return (
        <>
            <NumberInput
                inputHandler={inputHandler}
                input={input}
                baseHandler={baseHandler}
                base={base}
            />
            {!validInput && <p>Algarismo Invalido para a base numerica escolhida</p>}
            <NumberOutput
                number={input}
                base={base}
                baseHandler={baseHandler}
                validInput={validInput}
            />
        </>
    );
}
export default Main;
