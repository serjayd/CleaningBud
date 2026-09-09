import { z } from "zod";

export const quoteSchema = z.object({
  postcode: z.string().trim().min(1, "Postcode is required"),

  propertyType: z.enum(["HOUSE", "FLAT", "STUDIO"], {
    message: "Please select a property type",
  }),

  bedrooms: z
    .number()
    .int("Bedrooms must be a whole number")
    .min(0, "Bedrooms cannot be negative"),

  bathrooms: z
    .number()
    .int("Bathrooms must be a whole number")
    .min(0, "Bathrooms cannot be negative"),

  serviceType: z.enum(
    [
      "REGULAR_CLEANING",
      "DEEP_CLEANING",
      "END_OF_TENANCY",
      "WINDOW_CLEANING",
      "HOME_AND_WINDOWS",
    ],
    {
      message: "Please select a cleaning service",
    },
  ),

  extras: z.array(
    z.enum([
      "OVEN_CLEANING",
      "FRIDGE_CLEANING",
      "INSIDE_CABINETS",
      "INTERIOR_WINDOWS",
      "EXTERIOR_WINDOWS",
      "LAUNDRY",
      "OTHER",
    ]),
  ),

  cleaningDate: z.string().min(1, "Please select a cleaning date"),
  cleaningTime: z.string().min(1, "Please select a cleaning date"),

  fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),

  emailAddress: z.email("Please enter a valid email address"),

  phoneNumber: z.string().trim().min(7, "Please enter a valid phone number"),

  propertyAddress: z
    .string()
    .trim()
    .min(5, "Property address must be at least 5 characters"),

  notes: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
