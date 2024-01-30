export class Converter {

    public static algarisms = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
    public static To(n: string, destinyBase: number)
    {
        const InputNumber: number = Number(n);
        let nextDivison = InputNumber;
        let result = "";
        while (nextDivison > 0)
        {
            const number = nextDivison % destinyBase;
            nextDivison = Math.floor(nextDivison / destinyBase);
            result = `${this.algarisms[number]}${result}`;
        }
        return result;
    }
    public static From(n: string, originalBase: number)
    {
        const InputNumber = n;
        let result = 0;
        let elementNumber = 0;
        for (let i = InputNumber.length; i > 0; i--)
        {
            const algarismValue = this.algarisms.findIndex((value) => value == InputNumber[i - 1]);
            const number = algarismValue * originalBase ** elementNumber;
            result += number;
            elementNumber++;
        }
        return result;
}
}