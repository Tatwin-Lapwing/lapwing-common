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

// Updated to a minimalist, bottom-border-only "editorial" style input
const inputStyles =
  "w-full border-b border-moss-300 bg-transparent px-0 py-3 text-moss-950 placeholder:text-moss-300/70 transition-colors focus:border-moss-700 focus:outline-none";

const errorStyles = "mt-2 text-sm text-red-700/80";

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
      className="bg-cream py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:gap-16 lg:gap-24">
        
        {/* Section heading - Editorial side column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 shrink-0 md:mb-0 md:w-1/3"
        >
          <h2
            id="contact-heading"
            className="font-heading text-2xl font-medium text-moss-950 md:text-3xl lg:text-4xl"
          >
            Get in Touch
          </h2>
          <div className="mt-6 h-[1px] w-12 bg-moss-300" />
          <p className="mt-8 text-lg font-light leading-relaxed text-moss-800">
            Interested in learning more about Lapwing Common? We&rsquo;d love to hear from you.
          </p>
        </motion.div>

        <div className="flex-1 max-w-prose">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-12 text-left"
              >
                <h3 className="font-heading text-2xl text-moss-950">
                  Message Sent.
                </h3>
                <p className="mt-4 text-lg font-light text-moss-800">
                  Thank you for your interest. We will be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-medium uppercase tracking-[0.1em] text-moss-500 transition-colors hover:text-moss-900"
                >
                  Send another message &rarr;
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
                className="space-y-10"
              >
                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="sr-only"
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
                    placeholder="Name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className={errorStyles} role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="sr-only"
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
                    placeholder="Email Address"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className={errorStyles} role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="sr-only"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputStyles} resize-none`}
                    placeholder="How can we help?"
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
                    className="border-l-2 border-red-700/50 bg-red-50/50 py-3 pl-4 text-sm font-light text-red-800"
                    role="alert"
                  >
                    Something went wrong. Please try again or email us directly at{" "}
                    <a
                      href="mailto:contact@lapwingcommon.com"
                      className="font-medium underline underline-offset-2 hover:text-red-950"
                    >
                      contact@lapwingcommon.com
                    </a>
                    .
                  </div>
                )}

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center border border-moss-950 bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-[0.1em] text-moss-950 transition-colors hover:bg-moss-950 hover:text-cream focus:ring-2 focus:ring-moss-950 focus:ring-offset-2 focus:ring-offset-cream focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "Submit"}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}