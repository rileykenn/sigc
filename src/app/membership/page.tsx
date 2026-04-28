'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Flag, Send, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const membershipTypes = [
  { id: 'full', label: 'Full Member', price: '$360/yr', desc: 'Full playing rights, AGU handicap, all competitions' },
  { id: 'veteran', label: 'Veteran', price: '$310/yr', desc: 'Over 60s playing membership with veterans comps' },
  { id: 'womens', label: "Women's", price: '$310/yr', desc: "Full playing rights and women's competition access" },
  { id: 'junior', label: 'Junior', price: '$100/yr', desc: 'Under 18s playing membership' },
  { id: 'social', label: 'Social', price: '$50/yr', desc: 'Clubhouse access and social events only' },
];

const steps = ['Personal', 'Membership', 'Golf Info', 'Review'];
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
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{label}</label>
      <input {...props} className="w-full bg-cream px-4 py-3 text-sm text-green-900 border border-sand-200 focus:border-green-500 focus:outline-none transition-all placeholder:text-gray-400" />
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
    if (!form.agreeTerms) { toast.error('Please agree to the terms'); return; }
    setSubmitted(true);
    toast.success('Application submitted!', { description: "We'll be in touch within 48 hours." });
  };

  const selectedType = membershipTypes.find((m) => m.id === form.membershipType);

  if (submitted) {
    return (
      <main>
        <Navbar />
        <section className="min-h-[80dvh] flex items-center justify-center bg-cream pt-28">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md px-6">
            <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-green-50">
              <Check size={40} className="text-green-600" />
            </div>
            <h1 className="font-serif italic text-3xl text-green-900 mb-3">Application Received</h1>
            <p className="text-gray-500 mb-6">Thank you, {form.firstName}! Your membership application has been submitted. We&apos;ll review it and contact you within 48 hours.</p>
            <a href="/" className="inline-block border border-green-800 text-green-800 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-green-800 hover:text-white transition-colors">
              Back to Home
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
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-cream min-h-[100dvh]">
        <div className="mx-auto max-w-2xl px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">Join Us</p>
            <h1 className="font-serif italic text-4xl sm:text-5xl text-green-900">Membership Application</h1>
            <p className="mt-3 text-gray-500">Fill out the form below and we&apos;ll be in touch</p>
          </motion.div>

          {/* Progress */}
          <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
            {steps.map((s, i) => {
              const Icon = stepIcons[i];
              const active = i === step;
              const done = i < step;
              return (
                <div key={s} className="flex items-center gap-2">
                  <button onClick={() => i <= step && setStep(i)} className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${done ? 'bg-green-700 text-white' : active ? 'bg-green-50 text-green-700 ring-2 ring-green-500' : 'bg-sand-200 text-gray-400'}`}>
                    {done ? <Check size={16} /> : <Icon size={16} />}
                  </button>
                  <span className={`text-xs font-medium hidden sm:block ${active ? 'text-green-700' : 'text-gray-400'}`}>{s}</span>
                  {i < steps.length - 1 && <div className={`w-8 h-0.5 mx-1 hidden sm:block ${i < step ? 'bg-green-500' : 'bg-sand-200'}`} />}
                </div>
              );
            })}
          </div>

          {/* Form Steps */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                {step === 0 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl text-green-900 mb-4">Personal Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input label="First Name" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="John" />
                      <Input label="Last Name" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Smith" />
                    </div>
                    <Input label="Email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="john@email.com" />
                    <Input label="Phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0412 345 678" />
                    <Input label="Date of Birth" type="date" value={form.dob} onChange={(e) => update('dob', e.target.value)} />
                    <Input label="Address" value={form.address} onChange={(e) => update('address', e.target.value)} placeholder="123 Main Street" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Suburb" value={form.suburb} onChange={(e) => update('suburb', e.target.value)} placeholder="Sussex Inlet" />
                      <Input label="Postcode" value={form.postcode} onChange={(e) => update('postcode', e.target.value)} placeholder="2540" />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl text-green-900 mb-4">Membership Type</h3>
                    <div className="space-y-3">
                      {membershipTypes.map((type) => (
                        <button key={type.id} onClick={() => update('membershipType', type.id)} className={`w-full text-left p-4 border transition-all ${form.membershipType === type.id ? 'border-green-500 bg-green-50' : 'border-sand-200 hover:border-green-300 hover:bg-cream'}`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-semibold text-green-900">{type.label}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{type.desc}</div>
                            </div>
                            <span className="text-sm font-serif font-semibold text-gold-500">{type.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <h3 className="font-serif text-xl text-green-900 mt-6 mb-4">Emergency Contact</h3>
                    <Input label="Contact Name" value={form.emergencyName} onChange={(e) => update('emergencyName', e.target.value)} placeholder="Jane Smith" />
                    <Input label="Contact Phone" type="tel" value={form.emergencyPhone} onChange={(e) => update('emergencyPhone', e.target.value)} placeholder="0412 345 678" />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl text-green-900 mb-4">Golf Information</h3>
                    <Input label="Current Handicap (if any)" value={form.handicap} onChange={(e) => update('handicap', e.target.value)} placeholder="e.g. 18" />
                    <Input label="Previous Club (if any)" value={form.previousClub} onChange={(e) => update('previousClub', e.target.value)} placeholder="e.g. Nowra Golf Club" />
                    <Input label="Golf Link Number (if any)" value={form.golfLinkNo} onChange={(e) => update('golfLinkNo', e.target.value)} placeholder="e.g. 201234567" />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl text-green-900 mb-4">Review Your Application</h3>
                    <div className="bg-cream p-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-500">Name</span><span className="font-medium text-green-900">{form.firstName} {form.lastName}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="font-medium text-green-900">{form.email}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="font-medium text-green-900">{form.phone}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Membership</span><span className="font-medium text-gold-500">{selectedType?.label} — {selectedType?.price}</span></div>
                      {form.handicap && <div className="flex justify-between"><span className="text-gray-500">Handicap</span><span className="font-medium text-green-900">{form.handicap}</span></div>}
                    </div>
                    <label className="flex items-start gap-3 mt-4 cursor-pointer">
                      <input type="checkbox" checked={form.agreeTerms} onChange={(e) => update('agreeTerms', e.target.checked)} className="mt-1 h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-600">I declare the above information is correct and agree to abide by the rules and by-laws of Sussex Inlet Golf Club.</span>
                    </label>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Nav Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-sand-200">
              <button onClick={prev} className={`inline-flex items-center gap-1 px-5 py-2.5 text-sm font-medium transition-all ${step === 0 ? 'invisible' : 'text-gray-600 hover:text-green-900'}`}>
                <ChevronLeft size={14} /> Back
              </button>
              {step < 3 ? (
                <button onClick={next} className="inline-flex items-center gap-1 bg-green-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors">
                  Continue <ChevronRight size={14} />
                </button>
              ) : (
                <button onClick={submit} className="inline-flex items-center gap-2 bg-gold-400 px-6 py-2.5 text-sm font-semibold text-green-900 hover:bg-gold-300 transition-colors">
                  <Send size={14} /> Submit Application
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
