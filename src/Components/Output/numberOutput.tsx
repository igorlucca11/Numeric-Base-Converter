import { basesNames, bases } from "../../consts";
import { Converter } from "../../converter";

type NumberOutputProps = {
    number: string,
    base: number,
    baseHandler: (a: HTMLSelectElement) => void,
    validInput: boolean,
}

function NumberOutput({number, base, validInput}: NumberOutputProps) {
    const decimal = Converter.From(number, base)
    return(
        <>
        { 
        basesNames.map(
            (base, index) => 
            <div key={bases[index]}>
                <p>{`${base}`}</p>
                { validInput &&(
                <p>{`${Converter.To(decimal.toString(), bases[index])}`}</p>)}
            </div>
            )
            }
        </>
    )
    }
    export default NumberOutput;