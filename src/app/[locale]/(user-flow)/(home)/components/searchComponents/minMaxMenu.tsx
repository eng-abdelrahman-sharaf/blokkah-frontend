import { Button } from "@/app/[locale]/components/Button";
import MenuContainer from "./MenuContainer";
import ResetButton from "./resetButton";

export default function MinMaxMenu({ minMaxState: [state, setState] }: { minMaxState: [[string, string], (value: [string, string]) => void] }) {

    const validateInt = (index: number) => (e: any) => {
        console.log(e.target.value);
        let value = e.target.value.replace(/[^0-9]/g, '');
        e.target.value = value;
        const newState:[string,string] = [...state];
        newState[index] = value;
        setState(newState);
    }

    return (
        <MenuContainer>
            <div className="py-1 px-[1.625rem] flex flex-col gap-4">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1.5">
                        <div className="text-md font-medium">Minimum</div>
                        <input type="number" className="w-24 h-10 border border-Gray-300 rounded-lg p-2 text-md font-medium" onInput={validateInt(0)}  placeholder="0" value={state[0]} min={0}/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <div className="text-md font-medium">Maximum</div>
                        <input type="number" className="w-24 h-10 border border-Gray-300 rounded-lg p-2 text-md font-medium" value={state[1]} placeholder="any" onInput={validateInt(1)}  />
                    </div>
                </div>
                <ResetButton onClick={() => setState(["", ""])} />
            </div>
        </MenuContainer>
    );
}