'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Flag, ChevronRight, ChevronLeft, Check, Send } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const membershipTypes = [
  { id: 'full', label: 'Full member', price: '$360/yr', desc: 'Full playing rights, AGU handicap, all competitions' },
  { id: 'veteran', label: 'Veteran', price: '$310/yr', desc: 'Over 60s playing membership with veterans comps' },
  { id: 'womens', label: "Women's", price: '$310/yr', desc: "Full playing rights and women's competition access" },
  { id: 'junior', label: 'Junior', price: '$100/yr', desc: 'Under 18s playing membership' },
  { id: 'social', label: 'Social', price: '$50/yr', desc: 'Clubhouse access and social events only' },
];

const steps = ['Personal', 'Membership', 'Golf info', 'Review'];
const stepIcons = [User, Heart, Flag, Send];

type FormData = {
  firstName: string; lastName: string; email: string; phone: string;
  dob: string; address: string; suburb: string; postcode: string;
  membershipType: string; emergencyName: string; emergencyPhone: string;
  handicap: string; previousClub: string; golfLinkNo: string;
  agreeTerms: boolean;
};

const initial: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  dob: '', address: '', suburb: '', postcode: '',
  membershipType: '', emergencyName: '', emergencyPhone: '',
  handicap: '', previousClub: '', golfLinkNo: '',
  agreeTerms: false,
};

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-700">{label}</label>
      <input {...props} className="w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/35 transition focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-500/15" />
    </div>
  );
}

export default function MembershipPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const next = () => { if (step < 3) setStep(step + 1); };
  const prev = () => { if (step > 0) setStep(step - 1); };

  const submit = () => {
    if (!form.agreeTerms) { toast.error('Please agree to the terms first'); return; }
    setSubmitted(true);
    toast.success('Application submitted', { description: "We'll be in touch within 48 hours." });
  };

  const selectedType = membershipTypes.find((m) => m.id === form.membershipType);

  if (submitted) {
    return (
      <main>
        <Navbar />
        <section className="flex min-h-[80dvh] items-center justify-center bg-sand-50 pt-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="max-w-md px-6 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-navy-100">
              <Check size={36} strokeWidth={1.5} className="text-navy-800" />
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance]">Application received</h1>
            <p className="mt-4 mb-8 leading-relaxed text-navy-900/70">Thanks, {form.firstName}. Your application is in and we&apos;ll be in touch within 48 hours.</p>
            <a href="/" className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-navy-200 bg-transparent px-7 py-3.5 text-sm font-semibold text-navy-900 transition hover:border-navy-400 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700">
              Back to home <ChevronRight size={16} strokeWidth={1.5} />
            </a>
          </motion.div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="min-h-[100dvh] bg-sand-50 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-2xl px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mb-12 text-center">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl [text-wrap:balance]">Join the club</h1>
            <p className="mx-auto mt-4 max-w-[62ch] leading-relaxed text-navy-900/70">Five membership categories, from juniors to social. Fill in the form and we&apos;ll be in touch within 48 hours.</p>
          </motion.div>

          {/* Progress */}
          <div className="mx-auto mb-10 flex max-w-md items-center justify-between">
            {steps.map((s, i) => {
              const Icon = stepIcons[i];
              const active = i === step;
              const done = i < step;
              return (
                <div key={s} className="flex items-center gap-2">
                  <button
                    onClick={() => i <= step && setStep(i)}
                    aria-label={`Step ${i + 1}: ${s}`}
                    className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 ${done ? 'bg-navy-900 text-sand-50' : active ? 'bg-white text-navy-800 ring-2 ring-navy-700' : 'bg-sand-100 text-navy-900/40'}`}
                  >
                    {done ? <Check size={16} strokeWidth={1.5} /> : <Icon size={16} strokeWidth={1.5} />}
                  </button>
                  <span className={`hidden text-xs font-medium sm:block ${active ? 'text-navy-800' : 'text-navy-900/40'}`}>{s}</span>
                  {i < steps.length - 1 && <div className={`mx-1 hidden h-px w-8 sm:block ${i < step ? 'bg-navy-400' : 'bg-sand-200'}`} />}
                </div>
              );
            })}
          </div>

          {/* Form steps */}
          <div className="rounded-2xl bg-white p-6 shadow-sm shadow-navy-900/5 ring-1 ring-sand-200 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
                {step === 0 && (
                  <div className="space-y-4">
                    <h3 className="mb-4 text-lg font-semibold text-navy-950">Personal details</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Input label="First name" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="John" />
                      <Input label="Last name" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Smith" />
                    </div>
                    <Input label="Email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="john@email.com" />
                    <Input label="Phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0412 345 678" />
                    <Input label="Date of birth" type="date" value={form.dob} onChange={(e) => update('dob', e.target.value)} />
                    <Input label="Address" value={form.address} onChange={(e) => update('address', e.target.value)} placeholder="123 Main Street" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Suburb" value={form.suburb} onChange={(e) => update('suburb', e.target.value)} placeholder="Sussex Inlet" />
                      <Input label="Postcode" value={form.postcode} onChange={(e) => update('postcode', e.target.value)} placeholder="2540" />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="mb-4 text-lg font-semibold text-navy-950">Membership type</h3>
                    <div className="space-y-3">
                      {membershipTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => update('membershipType', type.id)}
                          className={`w-full cursor-pointer rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 ${form.membershipType === type.id ? 'border-navy-700 bg-navy-50 ring-1 ring-navy-700' : 'border-sand-200 hover:border-navy-300'}`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="text-sm font-semibold text-navy-950">{type.label}</div>
                              <div className="mt-0.5 text-xs text-navy-900/60">{type.desc}</div>
                            </div>
                            <span className="text-sm font-semibold text-navy-800 tabular-nums">{type.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <h3 className="mt-6 mb-4 text-lg font-semibold text-navy-950">Emergency contact</h3>
                    <Input label="Contact name" value={form.emergencyName} onChange={(e) => update('emergencyName', e.target.value)} placeholder="Jane Smith" />
                    <Input label="Contact phone" type="tel" value={form.emergencyPhone} onChange={(e) => update('emergencyPhone', e.target.value)} placeholder="0412 345 678" />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="mb-4 text-lg font-semibold text-navy-950">Golf information</h3>
                    <Input label="Current handicap (if any)" value={form.handicap} onChange={(e) => update('handicap', e.target.value)} placeholder="e.g. 18" />
                    <Input label="Previous club (if any)" value={form.previousClub} onChange={(e) => update('previousClub', e.target.value)} placeholder="e.g. Nowra Golf Club" />
                    <Input label="GolfLink number (if any)" value={form.golfLinkNo} onChange={(e) => update('golfLinkNo', e.target.value)} placeholder="e.g. 201234567" />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="mb-4 text-lg font-semibold text-navy-950">Review your application</h3>
                    <div className="space-y-2 rounded-2xl bg-sand-50 p-4 text-sm">
                      <div className="flex justify-between"><span className="text-navy-900/60">Name</span><span className="font-medium text-navy-950">{form.firstName} {form.lastName}</span></div>
                      <div className="flex justify-between"><span className="text-navy-900/60">Email</span><span className="font-medium text-navy-950">{form.email}</span></div>
                      <div className="flex justify-between"><span className="text-navy-900/60">Phone</span><span className="font-medium text-navy-950">{form.phone}</span></div>
                      <div className="flex justify-between"><span className="text-navy-900/60">Membership</span><span className="font-medium text-navy-800 tabular-nums">{selectedType?.label}, {selectedType?.price}</span></div>
                      {form.handicap && <div className="flex justify-between"><span className="text-navy-900/60">Handicap</span><span className="font-medium text-navy-950 tabular-nums">{form.handicap}</span></div>}
                    </div>
                    <label className="mt-4 flex cursor-pointer items-start gap-3">
                      <input type="checkbox" checked={form.agreeTerms} onChange={(e) => update('agreeTerms', e.target.checked)} className="mt-1 h-4 w-4 accent-navy-800" />
                      <span className="text-sm leading-relaxed text-navy-900/70">I declare the above information is correct and agree to abide by the rules and by-laws of Sussex Inlet Golf Club.</span>
                    </label>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Step navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-sand-200 pt-6">
              <button onClick={prev} className={`inline-flex min-h-11 cursor-pointer items-center gap-1 rounded-full px-5 py-2.5 text-sm font-medium text-navy-900/70 transition hover:text-navy-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 ${step === 0 ? 'invisible' : ''}`}>
                <ChevronLeft size={16} strokeWidth={1.5} /> Back
              </button>
              {step < 3 ? (
                <button onClick={next} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700">
                  Continue <ChevronRight size={16} strokeWidth={1.5} />
                </button>
              ) : (
                <button onClick={submit} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700">
                  <Send size={16} strokeWidth={1.5} /> Submit application
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
