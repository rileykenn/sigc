import { createClient } from '@supabase/supabase-js';
import type { GreenFeeRow, CartHireRow } from '@/lib/types';

// Fallback rates, used when Supabase is unreachable or the tables are empty.
// The admin area (/admin/pricing) is the source of truth once rows exist.
export const fallbackGreenFees: GreenFeeRow[] = [
  { id: 'fallback-9', type: '9 holes', members: '$10', visitors: '$29', jr_member: '$5', jr_visitor: '$15', sort_order: 1 },
  { id: 'fallback-18', type: '18 holes', members: '$10', visitors: '$40', jr_member: '$5', jr_visitor: '$15', sort_order: 2 },
];

export const fallbackCartHire: CartHireRow[] = [
  { id: 'fallback-cart-9', type: '9 holes', members: '$15', visitors: '$35', sort_order: 1 },
  { id: 'fallback-cart-18', type: '18 holes', members: '$24', visitors: '$45', sort_order: 2 },
];

function publicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function getRates(): Promise<{ greenFees: GreenFeeRow[]; cartHire: CartHireRow[] }> {
  const supabase = publicClient();
  if (!supabase) return { greenFees: fallbackGreenFees, cartHire: fallbackCartHire };
  try {
    const [fees, carts] = await Promise.all([
      supabase.from('green_fees').select('*').order('sort_order'),
      supabase.from('cart_hire').select('*').order('sort_order'),
    ]);
    return {
      greenFees: !fees.error && fees.data && fees.data.length > 0 ? (fees.data as GreenFeeRow[]) : fallbackGreenFees,
      cartHire: !carts.error && carts.data && carts.data.length > 0 ? (carts.data as CartHireRow[]) : fallbackCartHire,
    };
  } catch {
    return { greenFees: fallbackGreenFees, cartHire: fallbackCartHire };
  }
}

// "9 Holes" (as typed in the admin) renders as "9 holes".
// All-caps tokens such as AGU or NSW are left as typed.
export function sentenceCase(label: string): string {
  const trimmed = label.trim();
  if (!trimmed) return trimmed;
  return trimmed
    .split(' ')
    .map((word, i) => {
      if (i === 0) return word;
      if (word.length > 1 && word === word.toUpperCase() && word !== word.toLowerCase()) return word;
      return word.charAt(0).toLowerCase() + word.slice(1);
    })
    .join(' ');
}
