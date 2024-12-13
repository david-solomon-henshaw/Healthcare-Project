"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "General Health Check-ups",
      description:
        "Preventive care to monitor your overall health and catch potential issues early.",
      icon: "health-check-icon.svg", // Placeholder for the icon
    },
    {
      title: "Specialized Treatments",
      description:
        "Our experts offer specialized treatments in cardiology, dermatology, and more.",
      icon: "specialized-icon.svg", // Placeholder for the icon
    },
    {
      title: "Emergency Care",
      description:
        "Immediate care for accidents and sudden health conditions. Available 24/7.",
      icon: "emergency-icon.svg", // Placeholder for the icon
    },
    {
      title: "Surgical Services",
      description:
        "Elective and emergency surgeries with expert surgical teams and advanced equipment.",
      icon: "surgery-icon.svg", // Placeholder for the icon
    },
    {
      title: "Maternity & Pediatric Care",
      description:
        "Comprehensive care for mothers and children, including prenatal, delivery, and postnatal care.",
      icon: "maternity-icon.svg", // Placeholder for the icon
    },
    {
      title: "Mental Health Services",
      description:
        "Therapy and counseling services to support your mental well-being and emotional health.",
      icon: "mental-health-icon.svg", // Placeholder for the icon
    },
    {
      title: "Laboratory & Diagnostics",
      description:
        "Blood tests, imaging, screenings, and other diagnostic services to assess your health.",
      icon: "diagnostics-icon.svg", // Placeholder for the icon
    },
    {
      title: "Rehabilitation Services",
      description:
        "Physical, occupational, and speech therapy to help you recover and regain independence.",
      icon: "rehab-icon.svg", // Placeholder for the icon
    },
    {
      title: "Telemedicine",
      description:
        "Consult with healthcare professionals remotely from the comfort of your home.",
      icon: "telemedicine-icon.svg", // Placeholder for the icon
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-500">
          We offer a wide range of healthcare services to meet your needs, from general health check-ups to specialized care.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={`/icons/${service.icon}`} // Replace with actual path to icon files
                alt={service.title}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
