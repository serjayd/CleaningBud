export const PROPERTY_TYPE_LABELS = {
  HOUSE: "House",
  FLAT: "Flat",
  STUDIO: "Studio",
} as const;

export const SERVICE_TYPES = {
  REGULAR_CLEANING: {
    label: "Regular Home Cleaning",
    description: "Weekly, fortnightly or one-off",
    price: "£18/hr",
  },

  DEEP_CLEANING: {
    label: "Deep Cleaning",
    description: "Full top-to-bottom clean",
    price: "From £199",
  },

  END_OF_TENANCY: {
    label: "End of Tenancy",
    description: "Landlord-approved move-out clean",
    price: "From £249",
  },

  WINDOW_CLEANING: {
    label: "Window Cleaning",
    description: "Exterior & interior windows",
    price: "From £45",
  },

  HOME_AND_WINDOWS: {
    label: "Home + Windows Bundle",
    description: "Domestic + window cleaning",
    price: "From £129",
  },
} as const;

export const EXTRA_SERVICES = {
  OVEN_CLEANING: {
    label: "Oven cleaning",
    price: "+£35",
  },

  FRIDGE_CLEANING: {
    label: "Fridge cleaning",
    price: "+£20",
  },

  INSIDE_CABINETS: {
    label: "Inside cabinets",
    price: "+£25",
  },

  INTERIOR_WINDOWS: {
    label: "Interior windows",
    price: "+£30",
  },

  EXTERIOR_WINDOWS: {
    label: "Exterior windows",
    price: "+£25",
  },

  LAUNDRY: {
    label: "Laundry",
    price: "+£20",
  },

  OTHER: {
    label: "Other (specify in notes)",
    price: "",
  },
} as const;
