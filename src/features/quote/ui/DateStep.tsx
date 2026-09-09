"use client";

import { useFormContext, useWatch } from "react-hook-form";

import { QuoteFormValues } from "../model/schema";

const TIME_SLOTS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
];

export default function DateStep() {
  const { control, setValue } = useFormContext<QuoteFormValues>();

  const cleaningDate = useWatch({
    control,
    name: "cleaningDate",
  });

  const cleaningTime = useWatch({
    control,
    name: "cleaningTime",
  });

  const dates = Array.from({ length: 14 }, (_, index) => {
    const date = new Date();

    date.setDate(date.getDate() + index);

    return date;
  });

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const selectDate = (date: Date) => {
    setValue("cleaningDate", formatDate(date), {
      shouldValidate: true,
      shouldDirty: true,
    });

    // Reset time when changing date
    setValue("cleaningTime", "", {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const selectTime = (time: string) => {
    setValue("cleaningTime", time, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-xl font-semibold">Choose a date and time</h1>

        <p className="text-sm text-muted-foreground">
          Select a date and preferred cleaning time.
        </p>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7">
        {dates.map((date) => {
          const value = formatDate(date);
          const isSelected = cleaningDate === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => selectDate(date)}
              className={`rounded-xl border-2 bg-transparent p-4 text-center transition-all ${
                isSelected
                  ? "border-blue-500"
                  : "border-border hover:border-blue-300"
              }`}
            >
              <p className="text-xs text-muted-foreground">
                {date.toLocaleDateString("en-GB", {
                  weekday: "short",
                })}
              </p>

              <p className="mt-1 text-base font-semibold">{date.getDate()}</p>

              <p className="text-xs text-muted-foreground">
                {date.toLocaleDateString("en-GB", {
                  month: "short",
                })}
              </p>
            </button>
          );
        })}
      </div>

      {/* Times */}
      {cleaningDate && (
        <div>
          <h2 className="mb-3 font-semibold">Choose a time</h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TIME_SLOTS.map((time) => {
              const isSelected = cleaningTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => selectTime(time)}
                  className={`rounded-xl border-2 bg-transparent px-4 py-3 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-blue-500"
                      : "border-border hover:border-blue-300"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
