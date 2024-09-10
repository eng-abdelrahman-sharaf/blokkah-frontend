// "use client";

// import * as React from "react";

// import { Button } from "@/components/UI/Button";

// import { Check, ChevronDown } from "lucide-react";

// const AbsoluteMenu = ({
//   items,
//   showItem,
//   checkedArray,
//   setCheckedArray,
//   isVisible,
// }: {
//   items: Array<string>;
//   showItem: any;
//   checkedArray: string[];
//   setCheckedArray: any;
//   isVisible: boolean;
// }) => {
//   const makeOnChecked = (name: string) => {
//     return () => {
//       if (!checkedArray.includes(name)) {
//         setCheckedArray([...checkedArray, name]);
//       }
//       else {
//         setCheckedArray(checkedArray.filter((item) => item !== name));
//       }
//     };
//   };
//   return (
//     <div className={`max-h-80 overflow-hidden overflow-y-auto bg-white absolute top-full inset-x-0 mt-3 rounded-lg ${isVisible ? "" : "hidden"}`}>
//       <div>
//         {items.map((item, index) => (
//           <div className="w-full flex items-center px-3.5 py-2.5 rounded-lg hover:bg-Gray-50" key={index}>
//             <div className="grow text-Gray-900" onClick={makeOnChecked(item)}>
//               {showItem(item)}
//             </div>
//             {checkedArray.includes(item) && (<Check className="text-Brand-600 w-5 h-5" />)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default function DropdownMenuCheckboxes() {
//   const [checkedArray, setCheckedArray] = React.useState<Array<string>>([]);
//   const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(false);
//   const buttonRef = React.useRef<HTMLButtonElement>(null);

//   //   const items = ["1", "2", "3", "4","5+"];
//   const items = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "25+",
//   ];

//   const showItem = (item: string) =>
//     item === "1" ? item + " bedroom" : item + " bedrooms";
//   const showList = (items: Array<string>) =>
//     (items.length > 1 ? items.join(", ") : items[0]) + " bedrooms";

//   return (
//     <>
//       <Button
//         variant={"dropDownTrigger"}
//         icon={"trailing"}
//         customIconComponent={<ChevronDown className="h-4 w-4" />}
//         className="gap-8 w-[200px] relative"
//         data-checked={checkedArray.length > 0}
//         ref={buttonRef}
//         childrenWrapperClassName="grow overflow-hidden text-ellipsis"
//         onClick={(e : any) => {
//           const buttonElement = buttonRef.current as any;
//           const {
//             x: x1,
//             y: y1,
//             width: width1,
//             height: height1,
//           } = buttonElement.getBoundingClientRect();
//           const { x: x2, y: y2 } = e.target.getBoundingClientRect();
//           if (x1 <= x2 && y1 <= y2 && x1 + width1 >= x2 && y1 + height1 >= y2) {
//             console.log("clicked inside");
//             setIsMenuVisible(!isMenuVisible);
//           } else {
//             console.log("clicked outside");
//           }
//         }}
//         CustomAbsoluteComponent={
//           <AbsoluteMenu
//             checkedArray={checkedArray}
//             isVisible={isMenuVisible}
//             items={items}
//             setCheckedArray={setCheckedArray}
//             showItem={showItem}
//           />
//         }
//       >
//         {checkedArray.length ? showList(checkedArray) : "Open"}
//       </Button>
//     </>
//   );
// }

"use client";

import { DropDownBody , AreaDropDown } from "@/app/buyer/components/dropDown";
import { useState } from "react";

export default function page() {
  const [buttonText, setButtonText] = useState("open me");
  return (
    <AreaDropDown/>
  );
}
