import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Home } from "lucide-react"; // You’re already using this in hero
import Rose from "../../assets/Rose.jpg"
import "./Contact.css";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-wrapper">
      {/* ===== Top Bar ===== */}
      <div className="top-bar">
        <div className="email-box">
          <div className="email-content">
            <span className="email-icon1">
              <img
                src="/src/assets/message.png"
                alt="Email Icon"
                className="email-img"
              />
            </span>
            <span className="email-text">support@ugiftd.com</span>
          </div>
        </div>

        <div className="follow-container">
          <div className="follow-label">Follow on:</div>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="main-navbar">
        <div className="logo">
          <img src="/src/assets/uicone.png" alt="ugiftd logo" />
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#" className="active-link">
            HOME
          </a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </div>

        <div className="user-section">
          <FaSearch className="search-icon" />
          <div className="divider" />
          <span className="username">John Don</span>
          <img src="/src/assets/pic.png" alt="User avatar" className="avatar" />
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </div>
      )}

      {/* ===== Hero Section ===== */}

      <div
        className="hero-section relative h-[450px] flex items-center justify-center 
             after:content-[''] after:absolute after:inset-0 after:bg-black/40"
        style={{
          backgroundImage: `url(${Rose})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content relative z-[99]">
          <button className="order-btn flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <Home className="w-5 h-5 mr-2" /> {/* icon with space */}
            <span>Home &gt; About</span>
          </button>

          <h1 className="hero-heading">Contact Us</h1>
          <p className="hero-text">Connect With Us for a Better Gifting Experience</p>
        </div>

      </div>
      <section className="w-full   bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ==== LEFT CONTENT ==== */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-gray-700 border-b-2 border-blue-500 inline-block">
              Contact Us
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Connect with Us Today
            </h2>

            <p className="text-gray-600 max-w-md">
              Reach out anytime—we’re here to make your experience smooth and special
            </p>

            {/* Trusted Vendors */}
            <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3 max-w-md">
              <div className="flex items-center space-x-2">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  <img src="/src/assets/image.png" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="/src/assets/user1.png" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="/src/assets/user2.png" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="/src/assets/user3.png" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  200+ Trusted Vendors Like 1-800-Flowers & FTD
                </p>
              </div>
              <div className="bg-[#0661B5] text-white rounded-full p-2 cursor-pointer">
                ➜
              </div>
            </div>

            {/* Google Rating */}
            <p className="text-sm">
              <span className="text-yellow-500">★★★★☆</span>{" "}
              <span className="font-semibold">(4.8)</span> 1k+ rating on google
            </p>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="bg-[#EBF4FF] p-4 rounded-lg flex items-center space-x-3">
                <div className="bg-[#0661B5] p-3 rounded-full w-13 h-13 flex items-center justify-center">
                  <img src="/src/assets/call.png" alt="Icon" className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-gray-600">+91 91245 89045</p>
                </div>
              </div>

              <div className="bg-[#EBF4FF] p-4 rounded-lg flex items-center space-x-3">
                <div className="bg-[#0661B5] text-white p-3 rounded-full w-13 h-13 flex-none  flex items-center justify-center">✉️</div>
                <div>
                  <p className="font-semibold">Send us a Mail</p>
                  <p className="text-sm text-gray-600">support@ugiftd.com</p>
                </div>
              </div>

              <div className="bg-[#EBF4FF] p-4 rounded-lg flex items-center space-x-3">
                <div className="bg-[#0661B5] text-white p-3 rounded-full w-13 h-13 flex-none  flex items-center justify-center">
                  <img src="/src/assets/watch.png" alt="Clock Icon" className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-sm text-gray-600">We usually respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 w-[579px] h-[91px] text-[20px] mt-[276px]">
            <div className="bg-[#EBF4FF] rounded-xl shadow-md p-8 max-w-md w-full space-y-6">


              {/* Logo and Title */}
             <div className="space-y-1">
  <div className="flex items-center space-x-2">
    <div className="w-6 h-px bg-black"></div>
    <h1 className="font-semibold text-lg">UGiftd</h1>
  </div>
  <h2 className="text-2xl font-bold">Contact Form</h2>
  <p className="text-gray-500 text-sm">Your perfect gift journey starts with a message</p>
</div>

{/* Form Fields */}
<form className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Your name*"
      required
      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="email"
      placeholder="Email*"
      required
      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="tel"
      placeholder="Phone*"
      required
      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="text"
      placeholder="Subject*"
      required
      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <textarea
    placeholder="Your Message*"
    required
    rows="4"
    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-500 to-[#0661B5] text-white font-semibold py-2 rounded-md transition duration-300 hover:opacity-90"
  >
    Submit
  </button>
</form>

            </div>
          </div>

        </div>
        <footer className="bg-[#E9F1F9] text-black">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 mt-[160px]">
    {/* Logo & Description */}
    <div>
      <div className="flex items-center space-x-2">
        <img src="/src/assets/uicone.png" alt="Giftd Logo" className="h-8" />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-black max-w-xs">
        Never miss a moment that matters. From birthdays to anniversaries,
        UGiftd makes thoughtful gifting automatic, easy, and perfectly timed.
        Trusted vendors. Secure payments. Zero stress.
      </p>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold mb-4 text-black">Company</h4>
      <ul className="space-y-2 text-sm text-black">
        <li><a href="#">About Us</a></li>
        <li><a href="#">How it Works</a></li>
        <li><a href="#">Deliver Joy to Their Doorstep</a></li>
        <li><a href="#">Key features</a></li>
        <li><a href="#">Why UGiftd?</a></li>
        <li><a href="#">User Testimonials</a></li>
      </ul>
    </div>

    {/* Service */}
    <div>
      <h4 className="font-semibold mb-4 text-black">Service</h4>
      <ul className="space-y-2 text-sm text-black">
        <li><a href="#">Event-Based Gifting</a></li>
        <li><a href="#">AI-Powered Gift</a></li>
        <li><a href="#">Event Scheduling</a></li>
        <li><a href="#">Auto Payments</a></li>
        <li><a href="#">Custom Gifting</a></li>
      </ul>
    </div>

    {/* Get in Touch */}
    <div>
      <h4 className="font-semibold mb-4 text-black">Get in Touch</h4>
      <ul className="space-y-3 text-sm text-black">
        <li className="flex items-center space-x-2">
          <span className="material-icons text-black">email</span>
          <a href="mailto:support@ugiftd.com" className="text-black">support@ugiftd.com</a>
        </li>

        <li className="flex space-x-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0661B5]"
          >
            <FaTwitter size={14} className="text-white" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0661B5]"
          >
            <FaInstagram size={14} className="text-white" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0661B5]"
          >
            <FaYoutube size={14} className="text-white" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0661B5]"
          >
            <FaFacebookF size={14} className="text-white" />
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-300 mt-6 py-4 text-center text-sm text-black">
    © UGiftd 2025. All Rights Reserved.
  </div>
</footer>

      </section>
    </div>
  );
}
