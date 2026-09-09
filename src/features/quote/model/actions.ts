"use server";

import prisma from "@/lib/prisma";
import { quoteSchema } from "./schema";

export async function createQuote(data: unknown) {
  const parsed = quoteSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: "Invalid post data",
    };
  }

  const {
    postcode,
    propertyType,
    bedrooms,
    bathrooms,
    serviceType,
    extras,
    cleaningDate,
    cleaningTime,
    fullName,
    emailAddress,
    phoneNumber,
    propertyAddress,
    notes,
  } = parsed.data;

  try {
    const quote = await prisma.quote.create({
      data: {
        postcode,
        propertyType,
        bedrooms,
        bathrooms,
        serviceType,
        extras,
        cleaningDate,
        cleaningTime,
        fullName,
        emailAddress,
        phoneNumber,
        propertyAddress,
        notes,
      },
    });

    return {
      success: true,
      quote,
    };
  } catch (error) {
    console.error("Failed to estimate quote:", error);

    return {
      success: false,
      error: "Failed to estimate quote",
    };
  }
}
