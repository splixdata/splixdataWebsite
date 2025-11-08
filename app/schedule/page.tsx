"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Clock, MapPin, Globe, ChevronLeft, ChevronRight, X } from "lucide-react";

// Utility: Generate mock time slots for a given date
function generateSlots(date: Date, timezone: string): string[] {
  const slots: string[] = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM

  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }

  return slots;
}

// Utility: Format time based on 12h/24h preference
function formatTime(time: string, is24h: boolean): string {
  const [hours, minutes] = time.split(':').map(Number);

  if (is24h) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  const period = hours >= 12 ? 'pm' : 'am';
  const hour12 = hours % 12 || 12;
  return `${hour12}:${minutes.toString().padStart(2, '0')}${period}`;
}

// Utility: Get days in month
function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

// Utility: Get first day of month (0 = Sunday)
function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

// Utility: Format date for display
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Main component
export default function ScheduleDemoPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  // If Calendly URL is provided, show embed instead
  if (calendlyUrl) {
    return (
      <div className="min-h-screen bg-[#F4F6FA] flex items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden" style={{ height: '700px' }}>
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a Demo"
          />
        </div>
      </div>
    );
  }

  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [timezone, setTimezone] = useState('America/New_York');
  const [is24h, setIs24h] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Auto-detect user timezone on mount
  useEffect(() => {
    const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTz);
  }, []);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long' });

  // Generate calendar grid
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Check if date is in the past
  const isPastDate = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  // Check if date is today
  const isToday = (day: number) => {
    return day === today.getDate() &&
           currentMonth === today.getMonth() &&
           currentYear === today.getFullYear();
  };

  // Check if date is selected
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() &&
           currentMonth === selectedDate.getMonth() &&
           currentYear === selectedDate.getFullYear();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    if (isPastDate(day)) return;
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // In production, this would make an API call to book the slot
    alert(`Demo scheduled for ${formatDate(selectedDate!)} at ${formatTime(selectedSlot!, is24h)} (${timezone})`);
    setShowConfirmation(false);
  };

  const slots = selectedDate ? generateSlots(selectedDate, timezone) : [];

  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const timezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Australia/Sydney',
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] py-8 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Back to home link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to home
        </a>

        {/* Main card */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="grid lg:grid-cols-[280px_1fr_280px] gap-0">
            {/* Left Panel */}
            <div className="p-6 border-r border-neutral-200 bg-neutral-50">
              {/* Company avatar */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0B1220] grid place-items-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-base">SplixData</div>
                </div>
              </div>

              {/* Event title */}
              <h1 className="text-xl font-semibold text-neutral-900 mb-2">
                SplixData Intro
              </h1>

              {/* Description */}
              <p className="text-sm text-neutral-600 mb-6">
                Meet with our team to explore how SplixData can accelerate your biopharma research and decision-making.
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Clock className="w-4 h-4 text-neutral-500" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <MapPin className="w-4 h-4 text-neutral-500" />
                  <span>Video call</span>
                </div>
              </div>

              {/* Timezone selector */}
              <div className="mb-4">
                <label className="flex items-center gap-2 text-sm text-neutral-700 mb-2">
                  <Globe className="w-4 h-4 text-neutral-500" />
                  <span>Timezone</span>
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F6BFF] bg-white"
                >
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz.replace(/_/g, ' ')}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Middle Panel - Calendar */}
            <div className="p-6">
              {/* Calendar header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-neutral-900">
                  {monthName} {currentYear}
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 rounded-lg hover:bg-neutral-100 transition"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 rounded-lg hover:bg-neutral-100 transition"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Calendar grid */}
              <div role="grid" className="mb-4">
                {/* Weekday labels */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekdays.map((day) => (
                    <div
                      key={day}
                      className="text-xs font-medium text-neutral-500 text-center py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Date cells */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      role="gridcell"
                      className={`
                        aspect-square flex items-center justify-center text-sm rounded-lg
                        ${day === null ? '' : 'cursor-pointer'}
                        ${day && isPastDate(day) ? 'text-neutral-300 cursor-not-allowed' : ''}
                        ${day && !isPastDate(day) ? 'hover:bg-neutral-100' : ''}
                        ${day && isToday(day) ? 'ring-2 ring-[#2F6BFF] ring-inset' : ''}
                        ${day && isSelected(day) ? 'bg-[#2F6BFF] text-white hover:bg-[#2F6BFF]' : ''}
                      `}
                    >
                      {day && (
                        <button
                          onClick={() => handleDateSelect(day)}
                          disabled={isPastDate(day)}
                          aria-pressed={isSelected(day)}
                          className="w-full h-full flex items-center justify-center"
                        >
                          {day}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Time slots */}
            <div className="p-6 border-l border-neutral-200 bg-neutral-50 max-lg:border-l-0 max-lg:border-t">
              {/* 12h/24h toggle */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-neutral-700">Select time</h3>
                <button
                  onClick={() => setIs24h(!is24h)}
                  className="text-xs text-[#2F6BFF] hover:underline"
                >
                  {is24h ? '12h' : '24h'}
                </button>
              </div>

              {/* Time slots list */}
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {!selectedDate && (
                  <div className="text-sm text-neutral-500 text-center py-8">
                    Select a date to see available times
                  </div>
                )}

                {selectedDate && slots.length === 0 && (
                  <div className="text-sm text-neutral-500 text-center py-8">
                    No available times for this date
                  </div>
                )}

                {selectedDate && slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => handleSlotSelect(slot)}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white hover:border-[#2F6BFF] hover:bg-blue-50 transition text-sm text-neutral-900 text-center"
                  >
                    {formatTime(slot, is24h)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && selectedDate && selectedSlot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-neutral-900">Confirm your booking</h3>
              <button
                onClick={() => setShowConfirmation(false)}
                className="p-1 rounded-lg hover:bg-neutral-100"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-sm text-neutral-600 mb-1">Date</div>
                <div className="text-base font-medium text-neutral-900">
                  {formatDate(selectedDate)}
                </div>
              </div>

              <div>
                <div className="text-sm text-neutral-600 mb-1">Time</div>
                <div className="text-base font-medium text-neutral-900">
                  {formatTime(selectedSlot, is24h)}
                </div>
              </div>

              <div>
                <div className="text-sm text-neutral-600 mb-1">Timezone</div>
                <div className="text-base font-medium text-neutral-900">
                  {timezone.replace(/_/g, ' ')}
                </div>
              </div>

              <div>
                <div className="text-sm text-neutral-600 mb-1">Duration</div>
                <div className="text-base font-medium text-neutral-900">
                  45 minutes
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 rounded-lg bg-[#2F6BFF] text-white hover:brightness-110 transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
