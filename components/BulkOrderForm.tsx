import React, { useState } from 'react';
import { Button } from './Button';
import { Calendar, Users, Send, CheckCircle } from 'lucide-react';

const BulkOrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '50-100',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
      setFormData({ name: '', phone: '', date: '', guests: '50-100', details: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-card border border-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {status === 'success' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-20 transition-opacity">
          <div className="bg-green-500/20 p-6 rounded-full mb-6 animate-bounce">
            <CheckCircle size={48} className="text-secondary" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
          <p className="text-gray-400 text-center max-w-xs">We will call you shortly to discuss your party menu.</p>
        </div>
      ) : null}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Plan Your Party</h3>
        <p className="text-gray-400 text-sm">Bulk orders for birthdays, office meets & gatherings.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="+91 98765..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <Calendar size={14} /> Event Date
            </label>
            <input 
              type="date" 
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <Users size={14} /> Guest Count
            </label>
            <select 
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            >
              <option value="20-50">20 - 50 People</option>
              <option value="50-100">50 - 100 People</option>
              <option value="100-200">100 - 200 People</option>
              <option value="200+">200+ People</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Additional Details (Optional)</label>
          <textarea 
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={3}
            className="w-full bg-neutral-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Any specific menu requirements or preferences?"
          ></textarea>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={status === 'submitting'}
          icon={status === 'submitting' ? null : <Send size={18} />}
        >
          {status === 'submitting' ? 'Sending...' : 'Request Callback'}
        </Button>
      </form>
    </div>
  );
};

export default BulkOrderForm;