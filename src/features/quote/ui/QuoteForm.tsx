"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { QuoteFormValues, quoteSchema } from "../model/schema";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

import PropertyStep from "./PropertyStep";
import ServiceStep from "./ServiceStep";
import ExtrasStep from "./ExtrasStep";
import DateStep from "./DateStep";
import PropertyDetailsStep from "./PropertyDetailsStep";
import ReviewBookingStep from "./ReviewBookingStep";
import { createQuote } from "../model/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function QuoteForm() {
  const router = useRouter();

  const [step, setStep] = useState<number>(1);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),

    defaultValues: {
      postcode: "",
      propertyType: "HOUSE",
      bedrooms: 2,
      bathrooms: 1,
      serviceType: "REGULAR_CLEANING",
      extras: [],
      cleaningDate: "",
      cleaningTime: "",
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      propertyAddress: "",
      notes: "",
    },
  });

  const nextStep = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await form.trigger([
        "postcode",
        "propertyType",
        "bedrooms",
        "bathrooms",
      ]);
    }

    if (step === 2) {
      isValid = await form.trigger(["serviceType"]);
    }

    if (step === 3) {
      isValid = await form.trigger(["extras"]);
    }

    if (step === 4) {
      isValid = await form.trigger(["cleaningDate", "cleaningTime"]);
    }

    if (step === 5) {
      isValid = await form.trigger([
        "fullName",
        "emailAddress",
        "phoneNumber",
        "propertyAddress",
        "notes",
      ]);
    }

    if (step === 6) {
      isValid = true;
    }

    if (!isValid) return;

    setStep((prev) => prev + 1);
  };

  const onSubmit = async (data: QuoteFormValues) => {
    const res = await createQuote(data);

    if (!res.success) {
      toast.error(res.error);
      return;
    }

    toast.success("Your booking has been submitted!");
    router.push("/");
  };

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <SectionHeader
          title="Get your instant quote"
          description={`Step ${step} of 6`}
        />

        <section className="border border-border rounded-2xl shadow-sm p-8">
          {step === 1 && <PropertyStep />}
          {step === 2 && <ServiceStep />}
          {step === 3 && <ExtrasStep />}
          {step === 4 && <DateStep />}
          {step === 5 && <PropertyDetailsStep />}
          {step === 6 && <ReviewBookingStep />}

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={previousStep}
              disabled={step === 1}
            >
              Back
            </Button>

            {step < 6 ? (
              <Button type="button" onClick={nextStep}>
                Continue
              </Button>
            ) : (
              <Button type="button" onClick={form.handleSubmit(onSubmit)}>
                Book Cleaning
              </Button>
            )}
          </div>
        </section>
      </form>
    </FormProvider>
  );
}
