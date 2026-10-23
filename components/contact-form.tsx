'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '@/lib/content';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const interest = String(data.get('interest') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = encodeURIComponent(
      `AtexSoft inquiry${interest ? ` — ${interest}` : ''}${company ? ` (${company})` : ''}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        interest ? `Interest: ${interest}` : null,
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n')
    );

    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 sm:p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to send</h3>
        <p className="text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
          Your email client should open with your message addressed to{' '}
          {companyInfo.email}. If it does not, email us directly and we will
          respond promptly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Compose another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-sm font-semibold text-slate-700 mb-2">
            Full name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-slate-700 mb-2">
            Work email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-sm font-semibold text-slate-700 mb-2">
            Company
          </span>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Organization name"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-slate-700 mb-2">
            Area of interest
          </span>
          <select
            name="interest"
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option>AI Agent Development</option>
            <option>Blockchain Solutions</option>
            <option>Video Streaming & DRM</option>
            <option>Architecture & Design</option>
            <option>Software Development</option>
            <option>Consultant & Advisory</option>
            <option>Partnerships & Media</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-semibold text-slate-700 mb-2">
          How can we help?
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Share your goals, timeline, and any constraints we should know about."
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition resize-y min-h-[140px]"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] shadow-lg"
      >
        Send message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
