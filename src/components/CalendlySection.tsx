'use client';

import { useEffect, useState } from 'react';

interface EventType {
  uri: string;
  name: string;
  description: string;
  duration_minutes: number;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingForm {
  name: string;
  email: string;
  selectedDate: string;
  selectedTime: string;
  notes: string;
}

const CalendlySection = () => {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [selectedEventType, setSelectedEventType] = useState<string>('');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    selectedDate: '',
    selectedTime: '',
    notes: '',
  });

  // Fetch event types on mount
  useEffect(() => {
    fetchEventTypes();
  }, []);

  const fetchEventTypes = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/calendly/event-types');
      if (!response.ok) throw new Error('Failed to fetch event types');
      const data = await response.json();
      setEventTypes(data.collection || []);
      if (data.collection && data.collection.length > 0) {
        setSelectedEventType(data.collection[0].uri);
      }
    } catch (error) {
      console.error('Error fetching event types:', error);
      setErrorMessage('Failed to load available event types');
    } finally {
      setLoading(false);
    }
  };

  const fetchTimeSlots = async (eventTypeUri: string, date: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/calendly/availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventTypeUri,
          startDate: date,
          endDate: date,
        }),
      });
      if (!response.ok) throw new Error('Failed to fetch time slots');
      const data = await response.json();
      // Transform the time slots for display
      const slots = (data.collection || []).map((slot: any) => {
        const timeObj = new Date(slot.time);
        const timeString = timeObj.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        });
        return {
          time: timeString,
          available: true,
        };
      });
      setTimeSlots(slots);
    } catch (error) {
      console.error('Error fetching time slots:', error);
      setErrorMessage('Failed to load available time slots');
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.name || !formData.email || !formData.selectedDate || !formData.selectedTime) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/calendly/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventTypeUri: selectedEventType,
          inviteeEmail: formData.email,
          inviteeName: formData.name,
          startTime: `${formData.selectedDate}T${formData.selectedTime}:00.000Z`,
          endTime: `${formData.selectedDate}T${String(parseInt(formData.selectedTime) + 1).padStart(2, '0')}:00:00.000Z`,
          notes: formData.notes,
        }),
      });

      if (!response.ok) throw new Error('Failed to book appointment');
      
      setSuccessMessage('Appointment booked successfully! Check your email for confirmation.');
      setFormData({ name: '', email: '', selectedDate: '', selectedTime: '', notes: '' });
      setTimeSlots([]);
    } catch (error) {
      console.error('Booking error:', error);
      setErrorMessage('Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="calendly"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#f5f5f3] to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-[#5a5a57] text-lg max-w-2xl mx-auto">
            Book a time that works best for you. Our financial advisors are ready to help.
          </p>
        </div>

        {/* Booking Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl rounded-lg shadow-lg overflow-hidden bg-white p-8">
            <form onSubmit={handleBooking} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-[#babbb7] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-[#babbb7] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Event Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Service Type *
                </label>
                <select
                  value={selectedEventType}
                  onChange={(e) => {
                    setSelectedEventType(e.target.value);
                    setTimeSlots([]);
                  }}
                  className="w-full px-4 py-2 border border-[#babbb7] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                  required
                >
                  <option value="">Select a service</option>
                  {eventTypes.map((type) => (
                    <option key={type.uri} value={type.uri}>
                      {type.name} ({type.duration_minutes} min)
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Input */}
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.selectedDate}
                  onChange={(e) => {
                    setFormData({ ...formData, selectedDate: e.target.value });
                    if (selectedEventType) {
                      fetchTimeSlots(selectedEventType, e.target.value);
                    }
                  }}
                  className="w-full px-4 py-2 border border-[#babbb7] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                  required
                />
              </div>

              {/* Time Slot Selection */}
              {timeSlots.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-[#031931] mb-2">
                    Available Times *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setFormData({ ...formData, selectedTime: slot.time })}
                        disabled={!slot.available}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                          formData.selectedTime === slot.time
                            ? 'bg-[var(--primary)] text-white'
                            : slot.available
                            ? 'bg-[#f5f5f3] text-[#031931] hover:bg-[#e0e0db]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes Input */}
              <div>
                <label className="block text-sm font-semibold text-[#031931] mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 border border-[#babbb7] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                  placeholder="Tell us about your financial goals..."
                  rows={3}
                />
              </div>

              {/* Messages */}
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  {successMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--primary)] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-disabled"
              >
                {loading ? 'Booking...' : 'Book Appointment'}
              </button>
            </form>

            {/* Or use Calendly embed as fallback */}
            <div className="mt-12 pt-8 border-t border-[#babbb7]">
              <p className="text-center text-[#5a5a57] text-sm mb-4">
                Or book directly on Calendly
              </p>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/your-username"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>

        {/* Load Calendly script for fallback */}
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>
    </section>
  );
};

export default CalendlySection;
