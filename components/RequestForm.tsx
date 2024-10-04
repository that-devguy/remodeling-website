import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Define types for form data and error messages
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  streetAddress?: string;
}

export default function SimpleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
  });

  // Error state for each field
  const [errors, setErrors] = useState<Errors>({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
  });

  const serviceID = "service_2a1lovg";
  const templateID = "template_ay93zqo";
  const publicKey = "MzsPj1nZVAJnFvzuj";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update phone number format if it's the phone number field
    if (name === "phoneNumber") {
      const formattedValue = formatPhoneNumber(value);
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

    // Format to XXX-XXX-XXXX
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Errors = {}; // Ensure newErrors is typed

    // Check if full name contains at least 2 words
    if (!formData.fullName || formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "First and last name required"; // Update error message
      isValid = false;
    }
    // Validate email format
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    // Validate phone number: Must be in XXX-XXX-XXXX format
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Must be a 10 digit phone number";
      isValid = false;
    }
    if (!formData.streetAddress) {
      newErrors.streetAddress = "Street Address is required";
      isValid = false;
    }

    setErrors(newErrors); // Update error state
    return isValid; // Return the validity status
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate the form before submitting
    if (!validateForm()) {
      setIsSubmitting(false); // Reset submitting state
      return; // Prevent form submission
    }

    emailjs
      .send(serviceID, templateID, formData as Record<string, any>, publicKey)
      .then(
        () => {
          alert("Request submitted successfully!");
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            streetAddress: "",
          }); // Reset all fields
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Failed to send request:", error);
          alert("Failed to send request. Please try again.");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      noValidate // Prevent native HTML validation
    >
      {/* Form Fields */}
      <div>
        {errors.fullName ? (
          <p className="text-sm text-red-600">{errors.fullName}</p>
        ) : (
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
        )}
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
          inputMode="text"
          className={`w-full rounded-md border border-gray-300 p-2 shadow-sm ${
            errors.fullName ? "border-red-500" : ""
          }`}
        />
      </div>

      <div>
        {errors.email ? (
          <p className="text-sm text-red-600">{errors.email}</p>
        ) : (
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
        )}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          inputMode="email"
          className={`w-full rounded-md border border-gray-300 p-2 shadow-sm ${
            errors.email ? "border-red-500" : ""
          }`}
        />
      </div>

      <div>
        {errors.phoneNumber ? (
          <p className="text-sm text-red-600">{errors.phoneNumber}</p>
        ) : (
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
        )}
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="123-456-7890"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          inputMode="numeric"
          className={`w-full rounded-md border border-gray-300 p-2 shadow-sm ${
            errors.phoneNumber ? "border-red-500" : ""
          }`}
        />
      </div>

      <div>
        {errors.streetAddress ? (
          <p className="text-sm text-red-600">{errors.streetAddress}</p>
        ) : (
          <label
            htmlFor="streetAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
        )}
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="123 Main St, Anytown, USA"
          value={formData.streetAddress}
          onChange={handleChange}
          required
          inputMode="text"
          className={`w-full rounded-md border border-gray-300 p-2 shadow-sm ${
            errors.streetAddress ? "border-red-500" : ""
          }`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`col-span-1 mt-3 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:col-span-2 ${
          isSubmitting ? "cursor-not-allowed bg-gray-400" : "bg-brand-secondary"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
