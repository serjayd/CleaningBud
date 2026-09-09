"use client";

import { useFormContext, useWatch } from "react-hook-form";

import { QuoteFormValues } from "../model/schema";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { PROPERTY_TYPE_LABELS } from "@/constants/quote.data";

export default function PropertyStep() {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  const propertyType = useWatch({
    control,
    name: "propertyType",
  });

  return (
    <div className="space-y-4">
      <h1 className="text-xl mb-4">Tell us about your property</h1>
      <Field>
        <FieldLabel htmlFor="postcode">Postcode</FieldLabel>

        <Input
          type="text"
          placeholder="DA8 1AB"
          id="postcode"
          {...register("postcode")}
        />

        {errors.postcode && <FieldError>{errors.postcode.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel>Property Type</FieldLabel>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
            <Button
              key={value}
              type="button"
              variant={propertyType === value ? "default" : "outline"}
              onClick={() =>
                setValue(
                  "propertyType",
                  value as QuoteFormValues["propertyType"],
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  },
                )
              }
            >
              {label}
            </Button>
          ))}
        </div>
      </Field>

      <div className="grid md:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="bedrooms">Bedrooms</FieldLabel>

          <Input
            type="number"
            min={1}
            max={10}
            id="bedrooms"
            {...register("bedrooms", {
              valueAsNumber: true,
            })}
          />

          {errors.bedrooms && (
            <FieldError>{errors.bedrooms.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="bathrooms">Bathrooms</FieldLabel>

          <Input
            type="number"
            min={1}
            max={10}
            id="bathrooms"
            {...register("bathrooms", {
              valueAsNumber: true,
            })}
          />

          {errors.bathrooms && (
            <FieldError>{errors.bathrooms.message}</FieldError>
          )}
        </Field>
      </div>
    </div>
  );
}
