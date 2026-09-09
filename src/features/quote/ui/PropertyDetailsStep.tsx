"use client";

import { useFormContext } from "react-hook-form";

import { QuoteFormValues } from "../model/schema";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PropertyDetailsStep() {
  const {
    register,

    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  return (
    <div className="space-y-4">
      <h1 className="text-xl mb-4">Your details</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>

          <Input
            type="text"
            placeholder="John Doe"
            id="fullName"
            {...register("fullName")}
          />

          {errors.fullName && (
            <FieldError>{errors.fullName.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="emailAddress">Email Address</FieldLabel>

          <Input
            type="text"
            placeholder="john@doe.com"
            id="emailAddress"
            {...register("emailAddress")}
          />

          {errors.emailAddress && (
            <FieldError>{errors.emailAddress.message}</FieldError>
          )}
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>

          <Input
            type="text"
            placeholder="07700 900000"
            id="phoneNumber"
            {...register("phoneNumber")}
          />

          {errors.phoneNumber && (
            <FieldError>{errors.phoneNumber.message}</FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="propertyAddress">Property Address</FieldLabel>

          <Input
            type="text"
            placeholder="12 High Street, Erith"
            id="propertyAddress"
            {...register("propertyAddress")}
          />

          {errors.propertyAddress && (
            <FieldError>{errors.propertyAddress.message}</FieldError>
          )}
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="notes">Additional notes (optional)</FieldLabel>

        <Textarea
          placeholder="Access instructions, key safe code, specific requirements..."
          id="notes"
          {...register("notes")}
          className="h-30 resize-none"
        />

        {errors.notes && <FieldError>{errors.notes.message}</FieldError>}
      </Field>
    </div>
  );
}
