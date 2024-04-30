import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    },
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const PlacesForm = z.object({
  title: z.string().min(1, "firstName is required."),
  description: z.string().min(3, "lastName is required"),
  listing_status: z.string(),
  lat: z.number().positive(),
  long: z.number().positive(),
  businessNature: z.string().min(1, "should be sent"),
  individualNbr: z.string().optional(),
  individualTaxIdNbr: z.string().optional(),
  businessRegistrationNbr: z.string().optional(),
  businessTaxIdNbr: z.string().optional(),
  street: z.string().min(4, "password must be greater than 4 char"),
  city: z.string(),
  province: z.string(),
  postal_code: z.string(),
  country: z.string(),
  subtitle: z.string().optional(),
  place_type: z.string().optional(),
  booking_policy: z.string().optional(),
  id: z.string(),
  rating: z.number(),
  count: z.object({
    rooms: z.number(),
    bookings: z.number(),
    reviews: z.number(),
  }),
  images: z.array(z.string()),
});
const onlineEventSchema = z.object({
  dateRanges: z.object({
    date: z.string().min(1, "date should be greater than 1 char").optional(),
    startTime: z.string(),
    endTime: z.string(),
  }),
  platform: z.string().optional(),
  link: z.string().url(),
});
const onsiteEventSchema = z.object({
  extraAmount: z.number().positive(),
  privateGroupHosting: z.string().optional(),
  privateGroupHostingCharge: z.number().optional(),
  transferService: z.string().min(1, "minimum 1 char"),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});
export const ListingSchema = z
  .object({
    // title: z.string().min(1, 'title is required'),
    // description: z.string().min(5, 'description must be 5 char'),
    photos: z
      .array(z.string().min(1, "at least one should be selected"))
      .min(1, "at least one array should be selected"),
    location: z.string().min(1, "location is require"),
    businessNature: z.string().min(1, "should be sent"),
    currency: z
      .string()
      .min(1, "at least one currency value should be selected"),
    individualNbr: z.string().optional(),
    individualTaxIdNbr: z.string().optional(),
    businessRegistrationNbr: z.string().optional(),
    businessTaxIdNbr: z.string().optional(),
    price: z.number().positive("number should be positive").optional(),
    isPaid: z.boolean(),
    listingPaidType: z.string().min(1, "listing type is required"),
    noOfPromotionDays: z.number().positive(),
    eventType: z.string().min(1, "event type is required"),
    category: z.string().min(1, "minimum 1 char"),
    highlight: z.string().min(1, "minimum 1 char"),
    name: z.string().min(1, "minimum 1 char"),
    imageUrl: z.string().optional(),
    dateType: z.string().min(1),
    nbrOfDays: z.number().positive(),
    hoursPerDay: z.number().positive(),
    dateRanges: z
      .object({
        date: z.string().min(1, "minimum 1 char").optional(),
        startTime: z.string(),
        endTime: z.string(),
      })
      .optional(),
    maxAttendances: z.number().positive(),
    language: z.string(),
    status: z.string().min(1, "minimum 1 char").optional(),
    requirements: z.array(z.string().min(1, "minimum 1 char")).optional(),
    otherInformation: z.string().optional(),
    guestInformation: z.string().optional(),
    hostInformation: z.string().optional(),
    cancellationPolicy: z.string().optional(),
    hostSkillLevel: z.string(),
    isDiscountAvailable: z.boolean({
      required_error: "this field is required",
      invalid_type_error: "this field must be a boolean",
    }),
    discount: z.number().positive().optional(),
    business: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
    experiential: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
    healthAndWellness: z.string().optional(),
    specialInterest: z.string().optional(),
    onlineEvent: z.lazy(() => onlineEventSchema).optional(),
    onsiteEvent: z.lazy(() => onsiteEventSchema).optional(),
  })
  .refine((data) => {
    // Ensure that either onlineEvent or onsiteEvent is present
    if (!data.onlineEvent && !data.onsiteEvent) {
      throw new Error("Either onlineEvent or onsiteEvent should be present");
    }
    return true;
  });

export type TListing = z.infer<typeof ListingSchema>;
export type TPlaces = z.infer<typeof PlacesForm>;
export type TRegister = z.infer<typeof RegisterSchema>;
export type TLogin = z.infer<typeof LoginSchema>;
