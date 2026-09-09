import { useFormContext, useWatch } from "react-hook-form";

import { QuoteFormValues } from "../model/schema";
import { SERVICE_TYPES } from "@/constants/quote.data";
import { Button } from "@/components/ui/button";

export default function ServiceStep() {
  const { control, setValue } = useFormContext<QuoteFormValues>();

  const serviceType = useWatch({
    control,
    name: "serviceType",
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl mb-4">Which service do you need?</h1>

      {Object.entries(SERVICE_TYPES).map(([value, service]) => {
        const isSelected = serviceType === value;

        return (
          <Button
            key={value}
            type="button"
            variant="outline"
            className={`h-auto w-full justify-between rounded-xl border px-6 py-5 text-left transition-all ${
              isSelected
                ? "border-blue-500 bg-blue-50 text-blue-950 hover:bg-blue-50"
                : "border-border bg-transparent hover:border-blue-300 hover:bg-transparent"
            }`}
            onClick={() =>
              setValue("serviceType", value as QuoteFormValues["serviceType"], {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
          >
            <div>
              <h3 className="text-sm font-semibold">{service.label}</h3>

              <p className="mt-1 font-normal text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>

            <span className="ml-6 shrink-0 font-semibold">{service.price}</span>
          </Button>
        );
      })}
    </div>
  );
}
