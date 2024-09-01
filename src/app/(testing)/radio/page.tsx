import RadioGroup from "@/app/buyer/home/components/radioGroup";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div>
      <RadioGroup
        name="property-type"
        ValueArray={["rent", "buy"]}
        checkedValue="buy"
      >
        <div>Rent</div>
        <div>Buy</div>
      </RadioGroup>
    </div>
  );
}
