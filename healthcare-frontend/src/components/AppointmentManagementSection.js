"use client";

export default function AppointmentSection() {
  return (
    <div className="bg-indigo-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Manage Your Appointments</h2>
        <p className="mt-4 text-lg text-gray-500">
          Scheduling, tracking, and managing your appointments has never been easier. Our hospital offers a simple and intuitive way to manage your healthcare visits.
        </p>

        {/* Appointment Booking CTA */}
        <div className="mt-12">
          <a
            href="#appointment-booking"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-500"
          >
            Book an Appointment
          </a>
        </div>

        {/* Appointment Tracking CTA */}
        <div className="mt-8">
          <a
            href="#appointment-tracking"
            className="inline-block rounded-md bg-gray-200 px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-300"
          >
            Track Your Appointments
          </a>
        </div>

        {/* Appointment Management Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Schedule Your Appointment</h3>
            <p className="mt-4 text-gray-600">
              Easily book your next appointment with just a few clicks. Choose your preferred doctor and time.
            </p>
            <a
              href="#appointment-booking"
              className="mt-6 inline-block text-indigo-600 hover:text-indigo-500"
            >
              Book Now
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Appointment Reminders</h3>
            <p className="mt-4 text-gray-600">
              Get timely reminders about your upcoming appointments so you never miss a visit.
            </p>
            <a
              href="#appointment-tracking"
              className="mt-6 inline-block text-indigo-600 hover:text-indigo-500"
            >
              Set Reminder Preferences
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Track Your Appointments</h3>
            <p className="mt-4 text-gray-600">
              Track the status of your appointments, including confirmations, cancellations, and rescheduling.
            </p>
            <a
              href="#appointment-tracking"
              className="mt-6 inline-block text-indigo-600 hover:text-indigo-500"
            >
              Track Appointments
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
