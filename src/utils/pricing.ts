import { EXTRA_SERVICES } from "@/constants/quote.data";
import { QuoteFormValues } from "@/features/quote/model/schema";

const SERVICE_PRICES = {
  REGULAR_CLEANING: 18,
  DEEP_CLEANING: 199,
  END_OF_TENANCY: 249,
  WINDOW_CLEANING: 45,
  HOME_AND_WINDOWS: 129,
} as const;

const EXTRA_PRICES = {
  OVEN_CLEANING: 35,
  FRIDGE_CLEANING: 20,
  INSIDE_CABINETS: 25,
  INTERIOR_WINDOWS: 30,
  EXTERIOR_WINDOWS: 25,
  LAUNDRY: 20,
  OTHER: 0,
} as const;

const BEDROOM_PRICE = 10;
const BATHROOM_PRICE = 15;

export function calculatePrice(values: QuoteFormValues) {
  const servicePrice = SERVICE_PRICES[values.serviceType];

  const bedroomPrice = values.bedrooms * BEDROOM_PRICE;

  const bathroomPrice = values.bathrooms * BATHROOM_PRICE;

  const extras = values.extras.map((extra) => ({
    id: extra,
    name: EXTRA_SERVICES[extra].label,
    price: EXTRA_PRICES[extra],
  }));

  const extrasTotal = extras.reduce((total, extra) => total + extra.price, 0);

  const total = servicePrice + bedroomPrice + bathroomPrice + extrasTotal;

  return {
    servicePrice,
    bedroomPrice,
    bathroomPrice,
    extras,
    extrasTotal,
    total,
  };
}
