"use client";

import { useFormContext, useWatch } from "react-hook-form";

import { QuoteFormValues } from "../model/schema";
import { EXTRA_SERVICES } from "@/constants/quote.data";

export default function ExtrasStep() {
  const { control, setValue } = useFormContext<QuoteFormValues>();

  const extras = useWatch({
    control,
    name: "extras",
  });

  const toggleExtra = (extra: QuoteFormValues["extras"][number]) => {
    const isSelected = extras.includes(extra);

    const updatedExtras = isSelected
      ? extras.filter((item) => item !== extra)
      : [...extras, extra];

    setValue("extras", updatedExtras, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl mb-4">Any extras?</h1>

      {Object.entries(EXTRA_SERVICES).map(([value, extra]) => {
        const extraValue = value as QuoteFormValues["extras"][number];
        const isSelected = extras.includes(extraValue);

        return (
          <button
            key={value}
            type="button"
            onClick={() => toggleExtra(extraValue)}
            className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all ${
              isSelected
                ? "border-blue-500 bg-transparent"
                : "border-border bg-transparent hover:border-blue-300"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Checkbox */}
              <div
                className={`flex size-5 items-center justify-center rounded border transition-all ${
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-muted-foreground"
                }`}
              >
                {isSelected && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <span className="text-sm">{extra.label}</span>
            </div>

            <span className="font-semibold text-sm">{extra.price}</span>
          </button>
        );
      })}
    </div>
  );
}
