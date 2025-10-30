"use client";

import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z
    .string()
    .email("Enter a valid email")
    .transform((value) => value.trim()),
  phone: z.string().min(6, "Phone number is required"),
  subject: z.string().min(2, "Subject is required"),
  purpose: z.string().min(2, "Select a purpose"),
  message: z.string().min(10, "Tell us a little more"),
});

const purposes = [
  "Farm Visit",
  "Business Inquiry",
  "Media & Press",
  "CSR & Sustainability",
  "Other",
];

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(formValues);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string") {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setFormState({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setFormState({ status: "success" });
      setFormValues({ name: "", email: "", phone: "", subject: "", purpose: "", message: "" });
    } catch (err) {
      console.error("Error submitting contact form", err);
      setFormState({
        status: "error",
        message:
          err instanceof Error ? err.message : "Unable to send your inquiry right now. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex w-fit items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Contact Us
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Plan a visit or drop us a line.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Mahalakshmi Poultry Complex (HQ) <br />
            NH-216, East Godavari, Andhra Pradesh 533006
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Email:</strong> hello@mahalakshmipoultry.com
            </p>
          </div>
          <iframe
            title="Mahalakshmi Poultry Complex location"
            src="https://www.google.com/maps?q=17.1993368,82.060318&z=17&output=embed"
            className="h-64 w-full rounded-3xl border border-slate-200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-amber-100 bg-amber-50/50 p-8 shadow-sm"
        >
          <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Your full name"
                required
              />
              {errors.name ? (
                <span className="text-xs text-red-500">{errors.name}</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="you@example.com"
                required
              />
              {errors.email ? (
                <span className="text-xs text-red-500">{errors.email}</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                placeholder="Mobile number"
                required
              />
              {errors.phone ? (
                <span className="text-xs text-red-500">{errors.phone}</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="purpose" className="text-sm font-semibold text-slate-700">
                Purpose
              </label>
              <select
                id="purpose"
                name="purpose"
                value={formValues.purpose}
                onChange={handleChange}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              >
                <option value="">Select an option</option>
                {purposes.map((purpose) => (
                  <option key={purpose} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>
              {errors.purpose ? (
                <span className="text-xs text-red-500">{errors.purpose}</span>
              ) : null}
            </div>
          </fieldset>

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              placeholder="Inquiry subject"
              required
            />
            {errors.subject ? (
              <span className="text-xs text-red-500">{errors.subject}</span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formValues.message}
              onChange={handleChange}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              placeholder="Share details about your inquiry..."
              required
            />
            {errors.message ? (
              <span className="text-xs text-red-500">{errors.message}</span>
            ) : null}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              This form stores inquiries in our Supabase CRM. We respond within 2 business days.
            </span>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow transition hover:bg-amber-200"
              disabled={formState.status === "loading"}
            >
              {formState.status === "loading" ? "Sending…" : "Submit Inquiry"}
            </button>
          </div>

          {formState.status === "success" ? (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Thank you! Our team will reach out soon.
            </div>
          ) : null}

          {formState.status === "error" ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {formState.message}
            </div>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
