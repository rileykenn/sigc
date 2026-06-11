'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Save, Plus, Trash2 } from 'lucide-react';

export default function PricingManager() {
  const [greenFees, setGreenFees] = useState([
    { id: 1, type: '9 Holes', members: '$10', visitors: '$29', jrMember: '$5', jrVisitor: '$15' },
    { id: 2, type: '18 Holes', members: '$10', visitors: '$40', jrMember: '$5', jrVisitor: '$15' },
  ]);

  const [cartHire, setCartHire] = useState([
    { id: 1, type: '9 Holes', members: '$15', visitors: '$35' },
    { id: 2, type: '18 Holes', members: '$24', visitors: '$45' },
  ]);

  const handleSave = () => {
    // In a real app, this would be a fetch/mutation to Supabase
    toast.success('Pricing updated successfully!', {
      description: 'The live website has been updated with your new rates.'
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pricing & Rates</h1>
          <p className="mt-2 text-gray-500">Manage Green Fees and Cart Hire prices displayed on the homepage.</p>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 bg-fairway-700 hover:bg-fairway-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>

      {/* Green Fees Section */}
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Green Fees</h2>
          <button className="text-sm flex items-center gap-1.5 text-fairway-600 hover:text-fairway-700 font-medium bg-white px-3 py-1.5 rounded-lg ring-1 ring-gray-200 shadow-sm transition-colors">
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
                    <input type="text" defaultValue={row.type} className="w-full bg-transparent border-none p-1 focus:ring-0 text-sm font-medium text-gray-900" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" defaultValue={row.members} className="w-24 bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:border-fairway-500 focus:ring-1 focus:ring-fairway-500 text-sm outline-none" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" defaultValue={row.visitors} className="w-24 bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:border-fairway-500 focus:ring-1 focus:ring-fairway-500 text-sm outline-none" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" defaultValue={row.jrMember} className="w-24 bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:border-fairway-500 focus:ring-1 focus:ring-fairway-500 text-sm outline-none" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" defaultValue={row.jrVisitor} className="w-24 bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:border-fairway-500 focus:ring-1 focus:ring-fairway-500 text-sm outline-none" />
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
          <button className="text-sm flex items-center gap-1.5 text-fairway-600 hover:text-fairway-700 font-medium bg-white px-3 py-1.5 rounded-lg ring-1 ring-gray-200 shadow-sm transition-colors">
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
                    <input type="text" defaultValue={row.type} className="w-full bg-transparent border-none p-1 focus:ring-0 text-sm font-medium text-gray-900" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" defaultValue={row.members} className="w-24 bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:border-fairway-500 focus:ring-1 focus:ring-fairway-500 text-sm outline-none" />
                  </td>
                  <td className="px-6 py-3">
                    <input type="text" defaultValue={row.visitors} className="w-24 bg-white border border-gray-200 rounded-md px-3 py-1.5 focus:border-fairway-500 focus:ring-1 focus:ring-fairway-500 text-sm outline-none" />
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
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
