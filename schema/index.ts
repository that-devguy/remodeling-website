import * as z from "zod";

const RequestSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z
    .string()
    .min(6, "Email Address is required")
    .email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  preferredMethodOfCommunication: z.enum(["Phone Call", "Text", "Email"]),
  projectAddress: z.string().min(1, "Project Address is required"),
  typeOfProject: z
    .string()
    .refine(
      (value) =>
        [
          "Kitchen Remodel",
          "Bathroom Renovation",
          "Floor Installation",
          "Deck Construction",
          "Other",
        ].includes(value),
      {
        message: "Type of Project is required",
      },
    ),
  preferredCallbackTime: z.enum(["Morning", "Afternoon", "Evening"]),
  projectDescription: z
    .string()
    .min(1, "Brief Description of Your Project is required"),
  budgetRange: z
    .string()
    .refine(
      (value) =>
        [
          "Below $10,000",
          "$10,000 - $20,000",
          "$20,000 - $50,000",
          "Above $50,000",
        ].includes(value),
      { message: "Estimated Budget Range is required" },
    ),
  howDidYouHearAboutUs: z
    .string()
    .refine(
      (value) =>
        [
          "Internet Search",
          "Social Media",
          "Referral",
          "Advertisement",
          "Other",
        ].includes(value),
      { message: "How Did You Hear About Us is required" },
    ),
});

export default RequestSchema;
