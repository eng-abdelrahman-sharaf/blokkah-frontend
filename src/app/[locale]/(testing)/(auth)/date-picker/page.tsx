"use client";
import CalendarIcon from "@/app/[locale]/buyer/(auth)/sign-up/assets/calenderIcon";
import { useState } from "react";
import { DatePicker } from "@nextui-org/date-picker";
import styles from "./date-picker.module.css";

export default function App() {
  const className =
    "flex-row-reverse hidden gap-2 text-xl font-medium text-Gray-700 h-auto";
  return (
    <DatePicker
      label="Date of Birth (Gregorian)"
      className="w-[20%]"
      labelPlacement="outside"
      dateInputClassNames={{
        innerWrapper: "flex-row-reverse gap-2",
        inputWrapper: "h-auto px-3.5 py-2.5",
        label: "text-xl font-medium text-Gray-700",
      }}
      selectorIcon={<CalendarIcon />}
      showMonthAndYearPickers
    />
  );
}
