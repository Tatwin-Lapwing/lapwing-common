"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
}

const inputStyles =
  "w-full rounded-lg border border-moss-700 bg-white px-4 py-3 text-moss-900 placeholder:text-gray-400 transition-colors focus:border-moss-500 focus:ring-2 focus:ring-moss-500/20 focus:outline-none";

const errorStyles = "mt-1 text-sm text-red-600";

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      // TODO: Integrate with Resend for email delivery.
      // See README.md for setup instructions.
      // Example:
      //   const response = await fetch("/api/contact", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });
      //   if (!response.ok) throw new Error("Failed to send");

      console.log("Contact form submitted:", formData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-earth-50 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="contact-heading"
            className="font-heading text-3xl text-moss-900 md:text-4xl lg:text-5xl"
          >
            Get in Touch
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-moss-500" />
          <p className="mt-6 text-lg text-moss-700">
            Interested in learning more about Lapwing Common? We&rsquo;d love to
            hear from you.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-12 rounded-lg border border-moss-200 bg-moss-50 p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-moss-500">
                <svg
                  className="h-6 w-6 text-cream"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-moss-900">
                Message Sent
              </h3>
              <p className="mt-2 text-moss-700">
                Thank you for your interest. We&rsquo;ll be in touch shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-moss-600 underline underline-offset-4 transition-colors hover:text-moss-800"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              noValidate
              className="mt-12 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-moss-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className={errorStyles} role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-moss-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className={errorStyles} role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-moss-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputStyles} resize-none`}
                  placeholder="Tell us about your interest in nature investment..."
                />
                {errors.message && (
                  <p className={errorStyles} role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Error banner */}
              {status === "error" && (
                <div
                  className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                  role="alert"
                >
                  Something went wrong. Please try again or email us directly at{" "}
                  <a
                    href="mailto:contact@lapwingcommon.com"
                    className="font-medium underline"
                  >
                    contact@lapwingcommon.com
                  </a>
                  .
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center rounded-lg bg-moss-700 px-8 py-3.5 font-medium text-cream transition-colors hover:bg-moss-800 focus:ring-2 focus:ring-moss-500 focus:ring-offset-2 focus:ring-offset-earth-50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="-ml-1 mr-2 h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
