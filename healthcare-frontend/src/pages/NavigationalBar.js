"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaHospital } from "react-icons/fa"; // Hospital icon

export function NavigationalBar() {
  return (
    <Navbar fluid rounded className="bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"> 
      {/* White background with subtle shadow and 3D hover effect */}
      
      {/* Hospital Icon Logo */}
      <Navbar.Brand href="/">
        <FaHospital className="mr-3 h-8 sm:h-10 text-[#4A90E2] transition-transform duration-300 ease-in-out transform hover:scale-110" /> {/* Blue icon with hover effect */}
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-[#4A90E2] transition-all duration-300 ease-in-out hover:tracking-wider">
          Hospital Name
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 space-x-4"> {/* Space between buttons */}
        {/* Login and Sign Up Buttons with modern shadow and hover effects */}
        <Link to="/login">
          <Button className="bg-[#4A90E2] text-white hover:bg-[#357ABD] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-[#4A90E2] text-white hover:bg-[#357ABD] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Sign Up
          </Button>
        </Link>
        
        <Navbar.Toggle />
      </div>

      {/* Navbar Links with hover effect */}
      <Navbar.Collapse>
        <Navbar.Link href="/" active className="text-[#4A90E2] hover:text-[#357ABD] transform hover:scale-105 transition-all duration-300">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className="text-[#4A90E2] hover:text-[#357ABD] transform hover:scale-105 transition-all duration-300">
          About Us
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-[#4A90E2] hover:text-[#357ABD] transform hover:scale-105 transition-all duration-300">
          Services
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-[#4A90E2] hover:text-[#357ABD] transform hover:scale-105 transition-all duration-300">
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
