import { DatePicker } from "@nextui-org/date-picker";
import CalendarIcon from "../assets/calenderIcon";

export default function Date({label}:{label:string}) { 
    return (<DatePicker
        label={label}
        className="w-full"
        labelPlacement="outside"
        dateInputClassNames={{
            inputWrapper: "h-12 px-3.5 py-2.5 bg-white shadow-xs border border-Gray-300 rounded-lg",
            innerWrapper: "flex-row-reverse gap-2",
            label: "text-xl font-medium w-fit text-Gray-700 ml-1",
            input:"text-lg font-medium text-Grey-700 h-auto"
        }}
        selectorIcon={<CalendarIcon />}
        showMonthAndYearPickers
    />);
}