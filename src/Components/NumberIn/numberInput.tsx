import { bases, basesNames } from "../../consts";
type NumberInputProps = {
    inputHandler: (a: HTMLInputElement) => void,
    baseHandler: (a: HTMLSelectElement) => void,
    input: string,
    base: number,
}
function NumberInput({inputHandler, input, baseHandler, base}: NumberInputProps) {
return(
    <>
    <label>
        <input value={input} type="text" onChange={({ target }) => inputHandler(target)}/>
        <select value={base} onChange={({target}) => baseHandler(target)} >
            { bases.map(
                (base, index) => <option value={base} key={base} >{`${basesNames[index]}`}</option>)}
        </select>
    </label>
    </>
)
}
export default NumberInput;