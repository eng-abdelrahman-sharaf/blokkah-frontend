import { cn } from "@/lib/utils";

const RadioGroup = ({
  ValueArray,
  nodesArray,
  name,
  checkedValue = "",
  singleContainerClassName,
  wholeContainerClassName,
}: {
  ValueArray: Array<string>;
  nodesArray?: Array<JSX.Element>;
  name: string;
  checkedValue?: string;
  wholeContainerClassName?: string;
  singleContainerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex p-3 flex gap-3 bg-white rounded-lg",
        wholeContainerClassName
      )}
    >
      {ValueArray.map((value, index) => {
        return (
          <label
            key={index}
            className={`text-Gray-500 text-lg font-regular  rounded-lg  px-3 py-2 relative
                [&:has(>:checked)]:bg-Secondary-50 [&:has(>:checked)]:text-Secondary-900`}
          >
            {nodesArray && nodesArray[index]}
            <div className="absolute w-full h-full top-0 left-0 rounded-lg [&:has(+:checked)]:border [&:has(+:checked)]:border-Secondary-600"></div>
            <input
              name={name}
              value={value}
              className={`hidden`}
              type="radio"
              defaultChecked={value == checkedValue ? true : undefined}
            ></input>
          </label>
        );
      })}
    </div>
  );
};

export default function Page() {
  return (
    <div>
      <RadioGroup
        name="property-type"
        ValueArray={["rent", "buy"]}
        nodesArray={[<div>Rent</div>, <div>Buy</div>]}
        checkedValue="buy"
      />
    </div>
  );
}
