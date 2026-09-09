"use client";

import { useFormContext, useWatch } from "react-hook-form";

import { QuoteFormValues } from "../model/schema";
import { SERVICE_TYPES, EXTRA_SERVICES } from "@/constants/quote.data";
import { calculatePrice } from "@/utils/pricing";

export default function ReviewBookingStep() {
  const { control } = useFormContext<QuoteFormValues>();

  const values = useWatch({
    control,
  }) as QuoteFormValues;

  const price = calculatePrice(values);

  const service = SERVICE_TYPES[values.serviceType];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold">Review your booking</h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Please check your details before submitting your booking request.
        </p>
      </div>

      {/* Booking details */}
      <div className=" border-b border-border">
        <div className="divide-y divide-border">
          {/* Service */}
          <div className="flex items-start justify-between gap-4 p-4">
            <span className="text-sm text-muted-foreground">Service</span>

            <span className="text-right font-medium">{service.label}</span>
          </div>

          {/* Property */}
          <div className="flex items-start justify-between gap-4 p-4">
            <span className="text-sm text-muted-foreground">Property</span>

            <span className="text-right font-medium">
              {values.bedrooms} bed {values.propertyType.toLowerCase()},{" "}
              {values.bathrooms} {values.bathrooms === 1 ? "bath" : "baths"}
            </span>
          </div>

          {/* Date & time */}
          <div className="flex items-start justify-between gap-4 p-4">
            <span className="text-sm text-muted-foreground">Date & time</span>

            <span className="text-right font-medium">
              {formatDate(values.cleaningDate)} at {values.cleaningTime}
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start justify-between gap-4 p-4">
            <span className="text-sm text-muted-foreground">Address</span>

            <span className="max-w-[60%] text-right font-medium">
              {values.propertyAddress}
            </span>
          </div>

          {/* Contact */}
          <div className="flex items-start justify-between gap-4 p-4">
            <span className="text-sm text-muted-foreground">Contact</span>

            <div className="max-w-[60%] text-right font-medium">
              <p>{values.fullName}</p>
              <p className="text-sm font-normal text-muted-foreground">
                {values.emailAddress}
              </p>
              <p className="text-sm font-normal text-muted-foreground">
                {values.phoneNumber}
              </p>
            </div>
          </div>

          {/* Extras */}
          <div className="flex items-start justify-between gap-4 p-4">
            <span className="text-sm text-muted-foreground">Extras</span>

            {values.extras.length === 0 ? (
              <span className="font-medium">None selected</span>
            ) : (
              <div className="max-w-[60%] text-right">
                {values.extras.map((extra) => (
                  <p key={extra} className="font-medium">
                    {EXTRA_SERVICES[extra].label}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Estimated total */}
      <div className="rounded-xl border border-primary p-5">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Estimated total</span>

          <span className="text-2xl font-bold">£{price.total}</span>
        </div>
      </div>

      {/* Terms */}
      <p className="text-sm leading-6 text-muted-foreground">
        By submitting this booking request, you agree to our{" "}
        <span className="font-medium text-foreground">Terms of Service</span>{" "}
        and <span className="font-medium text-foreground">Privacy Policy</span>.
        Payment is due after the clean is completed. Cancellations must be made
        24 hours in advance.
      </p>
    </div>
  );
}

function formatDate(date: string) {
  if (!date) return "";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}
