"use client";

const testimonials = [
  {
    name: "John Doe",
    location: "New York",
    feedback: "The care I received at this hospital was outstanding. The doctors and staff were incredibly supportive during my recovery.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Lee",
    location: "Los Angeles",
    feedback: "From the moment I walked in, I felt at ease. The nurses and doctors made sure I was comfortable throughout my treatment.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Brown",
    location: "Chicago",
    feedback: "I had surgery here, and the team took great care of me. My recovery was quick, and I couldn’t be happier with the results.",
    image: "https://via.placeholder.com/100",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">What Our Patients Say</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          Real stories from real patients who experienced exceptional care.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-500"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </div>
  );
}
