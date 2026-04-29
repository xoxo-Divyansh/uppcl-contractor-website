"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  UsersIcon,
} from "@/components/icons";
import { siteInfo } from "@/content/site";

type LeadFormState = {
  name: string;
  phone: string;
  workType: string;
  district: string;
  message: string;
};

const initialState: LeadFormState = {
  name: "",
  phone: "",
  workType: "",
  district: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormState>(initialState);
  const whatsAppBase =
    siteInfo.whatsAppHref.split("?")[0] ?? siteInfo.whatsAppHref;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      "Hello, I want to discuss an electrical or tender-related project.",
      "",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Work Type: ${form.workType || "-"}`,
      `District: ${form.district || "-"}`,
      `Message: ${form.message || "-"}`,
    ];

    window.open(
      `${whatsAppBase}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="section-card p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
            Project enquiry form
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--heading)]">
            Share your requirement and move the conversation faster
          </h2>
        </div>
        <div className="rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
          WhatsApp-first lead flow
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">
        This form is designed to collect the core details a contractor team
        needs before sharing a company profile, scheduling a callback, or
        discussing manpower, maintenance, or supply scope.
      </p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--heading)]">
              Name
            </span>
            <input
              required
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--heading)] outline-none transition focus:border-[var(--accent-strong)]"
              placeholder="Your full name"
              type="text"
              autoComplete="name"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--heading)]">
              Phone
            </span>
            <input
              required
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({ ...current, phone: event.target.value }))
              }
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--heading)] outline-none transition focus:border-[var(--accent-strong)]"
              placeholder="Your contact number"
              type="tel"
              autoComplete="tel"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--heading)]">
              Work type
            </span>
            <input
              value={form.workType}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  workType: event.target.value,
                }))
              }
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--heading)] outline-none transition focus:border-[var(--accent-strong)]"
              placeholder="Cable laying, manpower, maintenance..."
              type="text"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[var(--heading)]">
              District
            </span>
            <input
              value={form.district}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  district: event.target.value,
                }))
              }
              className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--heading)] outline-none transition focus:border-[var(--accent-strong)]"
              placeholder="Hardoi, Sitapur, Lucknow..."
              type="text"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--heading)]">
            Message
          </span>
          <textarea
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            className="min-h-36 rounded-[1.5rem] border border-[var(--border)] bg-white px-4 py-3 text-sm leading-7 text-[var(--heading)] outline-none transition focus:border-[var(--accent-strong)]"
            placeholder="Share scope, quantity, urgency, or district coverage details."
          />
        </label>

        <div className="grid gap-4 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-alt)] p-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[var(--heading)]">
              Fastest response path
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Submitting this form opens a prefilled WhatsApp message so the
              team receives your enquiry in a usable format immediately.
            </p>
          </div>
          <button className="button-primary justify-center" type="submit">
            Send on WhatsApp
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </form>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <a className="contact-card" href={siteInfo.phoneHref}>
          <PhoneIcon className="h-5 w-5 text-[var(--accent-strong)]" />
          <div>
            <p className="text-sm font-semibold text-[var(--heading)]">Call</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
              {siteInfo.phone}
            </p>
          </div>
        </a>
        <a className="contact-card" href={siteInfo.whatsAppHref}>
          <UsersIcon className="h-5 w-5 text-[var(--trust)]" />
          <div>
            <p className="text-sm font-semibold text-[var(--heading)]">
              WhatsApp
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
              Direct project discussion
            </p>
          </div>
        </a>
        <a className="contact-card" href={`mailto:${siteInfo.email}`}>
          <MailIcon className="h-5 w-5 text-[var(--accent-strong)]" />
          <div>
            <p className="text-sm font-semibold text-[var(--heading)]">Email</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
              {siteInfo.email}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
