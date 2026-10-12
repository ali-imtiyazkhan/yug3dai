"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-[10px] p-8 text-center">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1D243C]">
          Message Received!
        </h3>
        <p className="mt-2 text-sm text-[#3f4c7c]">
          Thank you for reaching out to Yug3DAI. Our team will review your inquiry
          and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-emerald-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[10px] border border-slate-200 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-[#1D243C] mb-2"
        >
          Your Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          className="w-full px-4 py-3 rounded-[6px] border border-slate-300 bg-white text-[#1D243C] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#18444f] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-[#1D243C] mb-2"
        >
          Email Address <span className="text-rose-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. rahul@example.com"
          className="w-full px-4 py-3 rounded-[6px] border border-slate-300 bg-white text-[#1D243C] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#18444f] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-[#1D243C] mb-2"
        >
          Project Details / Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project requirements, target materials, or AI needs..."
          className="w-full px-4 py-3 rounded-[6px] border border-slate-300 bg-white text-[#1D243C] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#18444f] focus:border-transparent transition-all resize-y"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-[6px] bg-rose-50 border border-rose-200 text-sm text-rose-700">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending Message...
          </span>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
