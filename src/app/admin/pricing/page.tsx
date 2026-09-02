'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Save, Plus, Trash2, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { GreenFeeRow, CartHireRow } from '@/lib/types';

export default function PricingManager() {
  const [greenFees, setGreenFees] = useState<GreenFeeRow[]>([]);
  const [cartHire, setCartHire] = useState<CartHireRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const [fees, carts] = await Promise.all([
        supabase.from('green_fees').select('*').order('sort_order'),
        supabase.from('cart_hire').select('*').order('sort_order'),
      ]);
      if (fees.error || carts.error) {
        toast.error('Could not load pricing', { description: (fees.error ?? carts.error)?.message });
      } else {
        setGreenFees(fees.data as GreenFeeRow[]);
        setCartHire(carts.data as CartHireRow[]);
      }
      setLoading(false);
    };
    load();
  }, []);

  const updateFee = (id: string, field: keyof GreenFeeRow, value: string) =>
    setGreenFees((rows) => rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));

  const updateCart = (id: string, field: keyof CartHireRow, value: string) =>
    setCartHire((rows) => rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));

  const addFeeRow = () =>
    setGreenFees((rows) => [
      ...rows,
      { id: crypto.randomUUID(), type: '', members: '', visitors: '', jr_member: '', jr_visitor: '', sort_order: rows.length + 1 },
    ]);

  const addCartRow = () =>
    setCartHire((rows) => [
      ...rows,
      { id: crypto.randomUUID(), type: '', members: '', visitors: '', sort_order: rows.length + 1 },
    ]);

  const deleteFeeRow = async (row: GreenFeeRow) => {
    if (!window.confirm(`Delete the "${row.type || 'new'}" green fee row?`)) return;
    const { error } = await createClient().from('green_fees').delete().eq('id', row.id);
    if (error) {
      toast.error('Could not delete row', { description: error.message });
      return;
    }
    setGreenFees((rows) => rows.filter((r) => r.id !== row.id));
    toast.success('Row deleted');
  };

  const deleteCartRow = async (row: CartHireRow) => {
    if (!window.confirm(`Delete the "${row.type || 'new'}" cart hire row?`)) return;
    const { error } = await createClient().from('cart_hire').delete().eq('id', row.id);
    if (error) {
      toast.error('Could not delete row', { description: error.message });
      return;
    }
    setCartHire((rows) => rows.filter((r) => r.id !== row.id));
    toast.success('Row deleted');
  };

  const handleSave = async () => {
    setSaving(true);
    const supabase = createClient();
    const [feesResult, cartsResult] = await Promise.all([
      supabase.from('green_fees').upsert(greenFees.map((r, i) => ({ ...r, sort_order: i + 1 }))),
      supabase.from('cart_hire').upsert(cartHire.map((r, i) => ({ ...r, sort_order: i + 1 }))),
    ]);
    setSaving(false);

    if (feesResult.error || cartsResult.error) {
      toast.error('Could not save pricing', { description: (feesResult.error ?? cartsResult.error)?.message });
      return;
    }
    toast.success('Pricing updated successfully!', {
      description: 'The live website now shows your new rates.',
    });
  };

  const feeInput =
    'w-24 bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:border-fairway-500 focus:ring-1 focus:ring-fairway-500 text-sm outline-none';

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 py-24 text-gray-400">
        <Loader2 size={20} className="animate-spin" /> Loading pricing…
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pricing & Rates</h1>
          <p className="mt-2 text-gray-500">Manage Green Fees and Cart Hire prices displayed on the homepage.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-fairway-700 hover:bg-fairway-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm cursor-pointer disabled:opacity-70"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save Changes
        </button>
      </div>

      {/* Green Fees Section */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Green Fees</h2>
          <button
            onClick={addFeeRow}
            className="text-sm flex items-center gap-1.5 text-fairway-600 hover:text-fairway-700 font-medium bg-white px-3 py-1.5 rounded-lg ring-1 ring-gray-200 shadow-sm transition-colors cursor-pointer"
          >
            <Plus size={16} />
            Add Row
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Holes / Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Members</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Visitors</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Jr. Member</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Jr. Visitor</th>
                <th className="px-6 py-4 w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {greenFees.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-3">
                    <input type="text" value={row.type} placeholder="e.g. 9 Holes" onChange={(e) => updateFee(row.id, 'type', e.target.value)} className="w-full bg-transparent border-none p-1 focus:ring-0 text-sm font-medium text-gray-900" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={row.members} onChange={(e) => updateFee(row.id, 'members', e.target.value)} className={feeInput} />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={row.visitors} onChange={(e) => updateFee(row.id, 'visitors', e.target.value)} className={feeInput} />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={row.jr_member} onChange={(e) => updateFee(row.id, 'jr_member', e.target.value)} className={feeInput} />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={row.jr_visitor} onChange={(e) => updateFee(row.id, 'jr_visitor', e.target.value)} className={feeInput} />
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button onClick={() => deleteFeeRow(row)} aria-label={`Delete ${row.type} row`} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cart Hire Section */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Cart Hire</h2>
          <button
            onClick={addCartRow}
            className="text-sm flex items-center gap-1.5 text-fairway-600 hover:text-fairway-700 font-medium bg-white px-3 py-1.5 rounded-lg ring-1 ring-gray-200 shadow-sm transition-colors cursor-pointer"
          >
            <Plus size={16} />
            Add Row
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Holes / Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Members</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Visitors</th>
                <th className="px-6 py-4 w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {cartHire.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-3">
                    <input type="text" value={row.type} placeholder="e.g. 9 Holes" onChange={(e) => updateCart(row.id, 'type', e.target.value)} className="w-full bg-transparent border-none p-1 focus:ring-0 text-sm font-medium text-gray-900" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={row.members} onChange={(e) => updateCart(row.id, 'members', e.target.value)} className={feeInput} />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" value={row.visitors} onChange={(e) => updateCart(row.id, 'visitors', e.target.value)} className={feeInput} />
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button onClick={() => deleteCartRow(row)} aria-label={`Delete ${row.type} row`} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
