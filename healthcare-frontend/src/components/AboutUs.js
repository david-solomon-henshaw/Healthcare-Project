import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe 
} from 'lucide-react';
import { Link } from 'react-scroll';

const leadership = [
  {
    name: "Dr. Emily Rodriguez",
    title: "Chief Executive Officer",
    bio: "Transforming healthcare through innovative leadership and patient-centered strategies.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Michael Chen, MBA",
    title: "Chief Operations Officer",
    bio: "Driving operational excellence and strategic healthcare management.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Dr. Sarah Thompson",
    title: "Chief Medical Officer",
    bio: "Pioneering advanced medical treatments with compassionate care.",
    image: "/api/placeholder/300/300"
  }
];

const milestones = [
  { year: 1985, event: "Hospital Founded" },
  { year: 2001, event: "Emergency Department Expansion" },
  { year: 2010, event: "Nursing Excellence Recognition" },
  { year: 2015, event: "Robotic Surgery Center Launch" },
  { year: 2022, event: "Top 100 Healthcare Innovators" }
];

export default function HospitalAboutPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch(activeSection) {
      case 'leadership':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200"
                />
                <h3 className="text-xl font-bold text-center text-gray-800">{leader.name}</h3>
                <p className="text-center text-gray-600 mb-2">{leader.title}</p>
                <p className="text-center text-gray-500 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        );
      case 'milestones':
        return (
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md border border-gray-100 rounded-xl p-4 flex items-center transition-all hover:bg-gray-50"
              >
                <Clock className="text-gray-600 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">{milestone.year}</h4>
                  <p className="text-gray-600">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800">Horizon Health Center</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Committed to exceptional, compassionate healthcare that combines 
              cutting-edge medical technology with genuine human connection.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white shadow-md border border-gray-100 rounded-xl p-4 hover:bg-blue-50 transition-all">
                <Users className="mx-auto text-gray-600 mb-2" size={48} />
                <h3 className="font-bold text-gray-800">Patient-Centered Care</h3>
              </div>
              <div className="bg-white shadow-md border border-gray-100 rounded-xl p-4 hover:bg-blue-50 transition-all">
                <Award className="mx-auto text-gray-600 mb-2" size={48} />
                <h3 className="font-bold text-gray-800">Award-Winning Service</h3>
              </div>
              <div className="bg-white shadow-md border border-gray-100 rounded-xl p-4 hover:bg-blue-50 transition-all">
                <Globe className="mx-auto text-gray-600 mb-2" size={48} />
                <h3 className="font-bold text-gray-800">Community Impact</h3>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-center mb-8 space-x-4">
          {['overview', 'leadership', 'milestones'].map((section) => (
            <Link
              to={section}
              smooth
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeSection === section 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        <div className="mt-8">
          {renderSection()}
        </div>

        <div className="mt-12 bg-white shadow-md border border-gray-100 rounded-xl p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-700">
                <Phone className="mr-2" size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="mr-2" size={20} />
                <span>info@horizonhealth.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="mr-2" size={20} />
                <span>123 Healthcare Blvd, Wellness City</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Our Journey</h3>
            <div className="flex space-x-4">
              {[Users, Award, Globe].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-transform"
                >
                  <Icon size={32} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
