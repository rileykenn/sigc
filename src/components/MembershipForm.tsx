'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';
import { createClient } from '@/lib/supabase/client';
import { membershipTypes } from '@/data/membership';

const steps = ['Personal', 'Membership', 'Golf info', 'Review'];

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

// Button and type strings per spec section 2.
const buttonBase =
  'inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-semibold transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2';
const primary = `${buttonBase} bg-navy-950 text-sand-50 hover:bg-navy-800 focus-visible:outline-navy-700 disabled:cursor-not-allowed disabled:opacity-60`;
const secondary = `${buttonBase} border border-navy-950 bg-transparent text-navy-950 hover:bg-navy-950 hover:text-sand-50 focus-visible:outline-navy-700`;
const tertiary =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';
const heading = 'font-display text-2xl font-semibold text-navy-950';
const inputClass =
  'h-11 w-full border border-navy-950/25 bg-white px-3.5 text-base text-navy-950 placeholder:text-navy-900/55 transition-colors focus:border-navy-950 focus:outline-2 focus:outline-offset-0 focus:outline-navy-700';

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-900">{label}</label>
      <input id={id} {...props} className={inputClass} />
    </div>
  );
}

export default function MembershipForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const next = () => { if (step < 3) setStep(step + 1); };
  const prev = () => { if (step > 0) setStep(step - 1); };

  const submit = async () => {
    if (!form.agreeTerms) { toast.error('Please agree to the terms first'); return; }
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      toast.error('Please fill in your name and email', { description: 'Go back to the Personal step to complete them.' });
      return;
    }
    if (!form.membershipType) {
      toast.error('Please choose a membership type', { description: 'Go back to the Membership step to pick one.' });
      return;
    }

    setSubmitting(true);
    const { error } = await createClient().from('membership_applications').insert({
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      dob: form.dob || null,
      address: form.address.trim(),
      suburb: form.suburb.trim(),
      postcode: form.postcode.trim(),
      membership_type: form.membershipType,
      emergency_name: form.emergencyName.trim(),
      emergency_phone: form.emergencyPhone.trim(),
      handicap: form.handicap.trim(),
      previous_club: form.previousClub.trim(),
      golflink_no: form.golfLinkNo.trim(),
    });
    setSubmitting(false);

    if (error) {
      toast.error('Something went wrong submitting your application', {
        description: 'Please try again, or call the club on (02) 4441 2259.',
      });
      return;
    }

    setSubmitted(true);
    toast.success('Application submitted', { description: "We'll be in touch within 48 hours." });
  };

  const selectedType = membershipTypes.find((m) => m.id === form.membershipType);

  if (submitted) {
    return (
      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-navy-950/25">
            <Check size={28} strokeWidth={1.5} className="text-navy-950" aria-hidden="true" />
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">Application received</h2>
          <p className="mt-4 mb-8 leading-relaxed text-navy-900/75">Thanks, {form.firstName}. Your application is in and we&apos;ll be in touch within 48 hours.</p>
          <Link href="/" className={secondary}>Back to home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6">
        {/* Step indicator: numbered hairline squares, gold rule under the current step */}
        <ol className="mb-10 flex items-start justify-between gap-2 sm:gap-4">
          {steps.map((s, i) => {
            const active = i === step;
            const done = i < step;
            const square = done
              ? 'border-navy-950 bg-navy-950 text-sand-50'
              : active
                ? 'border-navy-950 text-navy-950'
                : 'border-navy-950/25 text-navy-900/70';
            return (
              <li key={s} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => i <= step && setStep(i)}
                  disabled={i > step}
                  aria-label={`${s}, step ${i + 1} of ${steps.length}`}
                  aria-current={active ? 'step' : undefined}
                  className={`flex h-11 w-11 cursor-pointer items-center justify-center border font-display text-lg tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 disabled:cursor-not-allowed ${square}`}
                >
                  {done ? <Check size={16} strokeWidth={1.5} aria-hidden="true" /> : i + 1}
                </button>
                {active && <div aria-hidden="true" className="mt-2 h-px w-11 bg-gold-500" />}
                <span className={`mt-2 text-center text-xs font-medium ${active ? 'text-navy-950' : 'text-navy-900/70'}`}>{s}</span>
              </li>
            );
          })}
        </ol>

        {/* Form panel */}
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            if (step < 3) next();
            else submit();
          }}
          className="border border-navy-950/15 bg-white p-6 sm:p-8"
        >
          {step === 0 && (
            <div className="space-y-4">
              <h2 className={`mb-4 ${heading}`}>Personal details</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="First name" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="John" autoComplete="given-name" />
                <Input label="Last name" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Smith" autoComplete="family-name" />
              </div>
              <Input label="Email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="john@email.com" autoComplete="email" />
              <Input label="Phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0412 345 678" autoComplete="tel" />
              <Input label="Date of birth" type="date" value={form.dob} onChange={(e) => update('dob', e.target.value)} autoComplete="bday" />
              <Input label="Address" value={form.address} onChange={(e) => update('address', e.target.value)} placeholder="123 Main Street" autoComplete="street-address" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Suburb" value={form.suburb} onChange={(e) => update('suburb', e.target.value)} placeholder="Sussex Inlet" autoComplete="address-level2" />
                <Input label="Postcode" value={form.postcode} onChange={(e) => update('postcode', e.target.value)} placeholder="2540" autoComplete="postal-code" />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className={`mb-4 ${heading}`}>Membership type</h2>
              <fieldset className="border-t border-navy-950/15">
                <legend className="sr-only">Membership type</legend>
                {membershipTypes.map((type) => (
                  <label key={type.id} className="flex min-h-14 cursor-pointer items-center gap-4 border-b border-navy-950/10 px-1 has-[:checked]:bg-sand-50">
                    <input
                      type="radio"
                      name="membershipType"
                      value={type.id}
                      checked={form.membershipType === type.id}
                      onChange={() => update('membershipType', type.id)}
                      className="h-5 w-5 accent-navy-950"
                    />
                    <span className="py-3">
                      <span className="block font-medium text-navy-950">{type.label}</span>
                      <span className="block text-sm text-navy-900/70">{type.desc}</span>
                    </span>
                    <span className="ml-auto font-display text-xl font-semibold tabular-nums text-navy-950">{type.price}</span>
                  </label>
                ))}
              </fieldset>
              <h2 className={`mt-8 mb-4 ${heading}`}>Emergency contact</h2>
              <Input label="Contact name" value={form.emergencyName} onChange={(e) => update('emergencyName', e.target.value)} placeholder="Jane Smith" />
              <Input label="Contact phone" type="tel" value={form.emergencyPhone} onChange={(e) => update('emergencyPhone', e.target.value)} placeholder="0412 345 678" />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className={`mb-4 ${heading}`}>Golf information</h2>
              <Input label="Current handicap (if any)" value={form.handicap} onChange={(e) => update('handicap', e.target.value)} placeholder="e.g. 18" />
              <Input label="Previous club (if any)" value={form.previousClub} onChange={(e) => update('previousClub', e.target.value)} placeholder="e.g. Nowra Golf Club" />
              <Input label="GolfLink number (if any)" value={form.golfLinkNo} onChange={(e) => update('golfLinkNo', e.target.value)} placeholder="e.g. 201234567" />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className={`mb-4 ${heading}`}>Review your application</h2>
              <dl className="divide-y divide-navy-950/10 border border-navy-950/15 bg-sand-50 p-4 text-sm">
                <div className="flex justify-between gap-4 py-2"><dt className="text-navy-900/70">Name</dt><dd className="text-right font-medium text-navy-950">{form.firstName} {form.lastName}</dd></div>
                <div className="flex justify-between gap-4 py-2"><dt className="text-navy-900/70">Email</dt><dd className="text-right font-medium text-navy-950">{form.email}</dd></div>
                <div className="flex justify-between gap-4 py-2"><dt className="text-navy-900/70">Phone</dt><dd className="text-right font-medium text-navy-950">{form.phone}</dd></div>
                <div className="flex justify-between gap-4 py-2"><dt className="text-navy-900/70">Membership</dt><dd className="text-right font-medium text-navy-950 tabular-nums">{selectedType ? `${selectedType.label}, ${selectedType.price}` : 'Not chosen yet'}</dd></div>
                {form.handicap && <div className="flex justify-between gap-4 py-2"><dt className="text-navy-900/70">Handicap</dt><dd className="text-right font-medium text-navy-950 tabular-nums">{form.handicap}</dd></div>}
              </dl>
              <label className="mt-4 flex min-h-11 cursor-pointer items-center gap-3 text-sm text-navy-900">
                <input type="checkbox" checked={form.agreeTerms} onChange={(e) => update('agreeTerms', e.target.checked)} className="h-5 w-5 shrink-0 accent-navy-950" />
                <span className="leading-relaxed">I declare the above information is correct and agree to abide by the rules and by-laws of Sussex Inlet Golf Club.</span>
              </label>
            </div>
          )}

          {/* Step navigation */}
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-navy-950/15 pt-6">
            <button type="button" onClick={prev} className={`${tertiary} ${step === 0 ? 'invisible' : ''}`}>
              <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> Back
            </button>
            {step < 3 ? (
              <button type="submit" className={primary}>
                Continue <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </button>
            ) : (
              <button type="submit" disabled={submitting} className={primary}>
                {submitting ? 'Submitting' : 'Submit application'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
