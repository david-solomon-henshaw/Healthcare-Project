import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TextInput } from "flowbite-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-400">XYZ Hospital</p>
            <p className="text-gray-400">123 Health St, City, Country</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@xyzhospital.com</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <a href="#" className="text-gray-400 hover:text-white">About Us</a>
            <a href="#" className="text-gray-400 hover:text-white">Services</a>
            <a href="#" className="text-gray-400 hover:text-white">Appointments</a>
            <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>

          {/* Social Media & Newsletter Signup */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-4">
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <TextInput
                type="email"
                placeholder="Enter your email"
                className="mt-2 bg-gray-800 text-white"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 XYZ Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
