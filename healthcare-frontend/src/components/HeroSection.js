import { Carousel } from "flowbite-react";

export default function HospitalHeroSection() {
  return (
    <div className="relative">
      {/* Hero Section with Carousel */}
      <div className="relative">
        {/* Carousel (Background/Images) */}
        <div className="h-screen">
          <Carousel 
            indicators={true}
            pauseOnHover
            slide={true}
          >
            <div className="relative h-screen w-full">
              <img 
                src="https://www.shutterstock.com/image-photo/two-surgeons-observing-highprecision-programmable-600nw-2324465547.jpg" 
                alt="Advanced Medical Care" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                    Compassionate Care, Advanced Technology
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    Delivering personalized healthcare solutions with cutting-edge medical expertise and genuine compassion.
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="#services" 
                      className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Explore Services
                    </a>
                    <a 
                      href="#contact" 
                      className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-screen w-full">
              <img 
                src="https://www.shutterstock.com/image-photo/team-doctor-nurse-vision-teamwork-260nw-2383719937.jpg" 
                alt="Expert Medical Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                    Expert Doctors, Personalized Care
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    Our world-class medical professionals are dedicated to providing tailored healthcare solutions for every patient.
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="#doctors" 
                      className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Meet Our Team
                    </a>
                    <a 
                      href="#appointment" 
                      className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-screen w-full">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/034/069/527/non_2x/state-of-the-art-medical-technology-equipment-and-medical-devices-in-a-modern-operating-room-including-x-ray-device-and-mri-scan-setting-the-stage-for-advanced-healthcare-ai-generative-photo.jpg" 
                alt="State-of-the-Art Facilities" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                    State-of-the-Art Medical Facilities
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    Equipped with the latest medical technologies and infrastructure to ensure the highest quality patient care.
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="#facilities" 
                      className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      View Facilities
                    </a>
                    <a 
                      href="#tour" 
                      className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                      Virtual Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}