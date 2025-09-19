import React, { useState } from "react";
import "./aboutus.css";
import heroBg from "/src/assets/flowersabout.png";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaSearch,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { Home } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const steps = [
    {
      number: '01',
      title: 'Create A Profile',
      description: 'Add Important Dates, Gift Types, Budgets, And Personal Notes—All In One Simple Step.',
      icon: '/icons/profile.png',
      bg: 'white',          // background of card
      circleBackground: 'blue',  // which half of circle is blue / white
    },
    {
      number: '02',
      title: 'Let AI Do The Work',
      description: 'Our AI Picks Thoughtful Gifts Based On Your Event, Budget, And Preferences—So You Don’t Have To.',
      icon: '/icons/ai.png',
      bg: 'blue',
      circleBackground: 'white',
    },
    {
      number: '03',
      title: 'Relax',
      description: 'Our AI Selects, Purchases, And Delivers Your Gift Days Before The Event—So You Never Miss A Moment.',
      icon: '/icons/relax.png',
      bg: 'white',
      circleBackground: 'blue',
    },
    {
      number: '04',
      title: 'Automatic Payments',
      description: 'No More Last‑Minute Checkouts—Everything Is Planned, Paid, And Delivered Automatically.',
      icon: '/icons/payment.png',
      bg: 'blue',
      circleBackground: 'white',
    },
  ];
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
        className="hero-section relative after:content-[''] after:absolute after:w-5/6 after:max-w-full
             after:h-full after:left-0 after:top-0
             after:[background:var(--color-regal-desktopSliderGradint)]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-content relative z-[99]">
          <button className="order-btn flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <Home className="w-5 h-5 mr-2" /> {/* icon with space */}
            <span>Home &gt; About</span>
          </button>

          <h1 className="hero-heading">
            About Us AGAIN


          </h1>
          <p className="hero-text">
            Where AI Meets Heartfelt Gifting
          </p>
        </div>

      </div>

      <section className="who-we-are-section">
        <div className="who-we-are-container">

          {/* LEFT: Content */}
          <div className="who-we-are-content">
            <div className="who-we-are-icon">
              <img
                src="/src/assets/icon4.png"
                alt="Icon"
              />
            </div>
            <h2 className="who-we-are-heading">
              Who <span>We Are</span>
            </h2>
            <p className="who-we-are-text">
              UGiftd Is Your AI-Powered Personal Gifting Assistant, Designed To Help You Stay Connected Through Meaningful, On-Time Gifts—Without The Stress. Whether It’s A Birthday, Anniversary, Or A Surprise Gesture, We Ensure Every Important Moment Is Remembered And Celebrated Effortlessly.
            </p>
            <ul className="who-we-are-list">
              <li>Smart Gifts, Perfectly Matched.</li>
              <li>Set Once And We’ll Handle The Rest, Year After Year.</li>
              <li>Your Card Is Charged Securely Before The Event, No Last-Minute Hassle.</li>
              <li>Seamless Delivery With Trusted Partners.</li>
            </ul>
          </div>

          {/* RIGHT: Image */}
          <div className="who-we-are-image">
            <img src="/src/assets/lab-2.png" alt="Team" />
          </div>
          <section className="mission-section">
            {/* Image and Experience Box */}
            <div className="image-experience-wrapper">
              <img
                src="/src/assets/2150172344 (1).png" // Replace with your image path
                alt="Couple with Flowers"
                className="mission-image"
              />

              {/* Experience Box */}
              <div className="experience-box">
                <div className="experience-years">25+</div>
                <div className="experience-text">
                  Years Of Experience
                  <div className="experience-rating">4.9 ⭐</div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="mission-text-content">
              <div className="mission-subtitle">Our Mission</div>

              <h2 className="mission-title">
                Making Every Gift Count,<br />
                <span className="highlighted">Effortlessly</span>
              </h2>

              <p className="mission-description">
                Our mission is to simplify the act of giving by combining smart automation with a personal touch—
                so no birthday, anniversary, or special day ever gets forgotten.
              </p>

              <div className="mission-points flex flex-col gap-4">
                {[
                  "We ensure no important date slips through the cracks.",
                  "Our smart system selects gifts that feel personal and appropriate.",
                  "No more last-minute shopping or scheduling stress.",
                  "Create deeper connections through timely and meaningful gestures."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <img src="/src/assets/right.png" alt="icon" className="w-5 h-5 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>

      </section>
      <section className="offer-section">
        {/* Left Content */}
        <div className="offer-left">
          <h2 className="offer-title">
            What We <span>Offer</span>
          </h2>
          <p className="offer-description">
            UGiftd simplifies the art of thoughtful giving by combining smart automation with personalized touches.
            From intelligent gift selection to seamless delivery and payment, we handle every step so you never miss a moment that matters.
            Whether it’s a birthday, anniversary, or a surprise “just because,” we ensure your gifts are meaningful,
            timely, and within budget—every single time.
          </p>

          {/* Avatars */}
          <div className="avatars">
            <img src="/src/assets/Ellipse 509.png" alt="Avatar" />
            <img src="/src/assets/Ellipse 510.png" alt="Avatar" />
            <img src="/src/assets/Ellipse 511.png" alt="Avatar" />
            <img src="/src/assets/Ellipse 511.png" alt="Avatar" />
            <img src="/src/assets/Ellipse 510.png" alt="Avatar" />
          </div>

          {/* Stats */}
          <div className="offer-stats">
            <div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div>
              <div className="stat-number">78+</div>
              <div className="stat-label">Project Delivered</div>
            </div>
            <div>
              <div className="stat-number">7+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>
        </div>

        {/* Right Content - Features */}
        <div className="offer-right">
          {/* Feature 1: AI Gift Selection */}
          <div className="feature-box">
            <div
              className="relative flex items-center p-8 rounded-xl"
              style={{
                backgroundImage: `url('/src/assets/Vector 2064.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "140px",
              }}
            >
              {/* Left Icon */}
              <div className="absolute top-1 left-[-8px] w-14 h-14 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img
                  src="/src/assets/aiicone.png"
                  alt="AI Icon"
                  className="w-6 h-6"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 ml-20">
                <h4 className="text-blue-700 font-semibold text-lg">
                  AI-Based Gift Selection
                </h4>
                <p className="text-gray-700 mt-1 text-sm">
                  Our intelligent gifting assistant uses smart algorithms to choose the
                  perfect gift for your loved ones, tailored to your selected budget,
                  event type, and preferences.
                </p>
              </div>

              {/* Right Arrow Icon */}
              <div className="absolute top-27 right-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img
                  src="/src/assets/arowsign.png"
                  alt="Arrow Icon"
                  className="w-5 h-5"
                />
              </div>

            </div>
          </div>

          {/* Feature 2: Event Scheduling */}
          <div className="feature-box">
            <div
              className="relative flex items-center p-8 rounded-xl"
              style={{
                backgroundImage: `url('/src/assets/Vector 2064.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "140px",
              }}
            >
              {/* Left Icon */}
              <div className="absolute top-1 left-[-8px] w-14 h-14 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img
                  src="/src/assets/akar-icons_schedule.png"
                  alt="AI Icon"
                  className="w-6 h-6"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 ml-20">
                <h4 className="text-blue-700 font-semibold text-lg">
                  Effortless Event Scheduling
                </h4>
                <p className="text-gray-700 mt-1 text-sm">
                  Plan once and stay covered for the whole year. Add special dates like
                  birthdays, anniversaries, or Valentine’s Day.
                </p>
              </div>

              {/* Right Arrow Icon */}
              <div className="absolute top-27 right-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img
                  src="/src/assets/arowsign.png"
                  alt="Arrow Icon"
                  className="w-5 h-5"
                />
              </div>

            </div>
          </div>

          {/* Feature 3: Auto Payments */}
          <div className="feature-box">
            <div
              className="relative flex items-center p-8 rounded-xl"
              style={{
                backgroundImage: `url('/src/assets/Vector 2064.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "140px",
              }}
            >
              {/* Left Icon */}
              <div className="absolute top-1 left-[-8px] w-14 h-14 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img
                  src="/src/assets/Group 1321316576.png"
                  alt="AI Icon"
                  className="w-6 h-6"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 ml-20">
                <h4 className="text-blue-700 font-semibold text-lg">
                  Auto Payments & Seamless Delivery
                </h4>
                <p className="text-gray-700 mt-1 text-sm">
                  We’ll automatically process your payments before the event and ensure
                  timely delivery so your gifts never arrive late.
                </p>
              </div>

              {/* Right Arrow Icon */}
              <div className="absolute top-27 right-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img
                  src="/src/assets/arowsign.png"
                  alt="Arrow Icon"
                  className="w-5 h-5"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
      <section className="how-it-works">
        <h2 className="how-it-works-title">How It <span>Works</span></h2>
        <div className="how-it-works-container">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`how-it-works-card ${step.isBlue ? 'blue' : 'white'}`}>
                <div className="icon-circle">
                  <div className="icon-inner">
                    <img src={step.icon} alt={step.title} />
                  </div>
                </div>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>

              {/* Arrow between cards (except last) */}
              {index !== steps.length - 1 && (
                <div className="arrow">
                  <FaArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
      </section>
      <footer className="bg-[#E9F1F9] text-black">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Logo & Description */}
    <div>
      <div className="flex items-center space-x-2">
        <img src="/src/assets/uicone.png" alt="Giftd Logo" className="h-8" />
        
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 max-w-xs">
        Never miss a moment that matters. From birthdays to anniversaries,
        UGiftd makes thoughtful gifting automatic, easy, and perfectly timed.
        Trusted vendors. Secure payments. Zero stress.
      </p>
    </div>

    {/* Company */}
    <div>
      <h4 className="font-semibold mb-4">Company</h4>
      <ul className="space-y-2">
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
      <h4 className="font-semibold mb-4">Service</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#">Event-Based Gifting</a></li>
        <li><a href="#">AI-Powered Gift</a></li>
        <li><a href="#">Event Scheduling</a></li>
        <li><a href="#">Auto Payments</a></li>
        <li><a href="#">Custom Gifting</a></li>
      </ul>
    </div>

    {/* Get in Touch */}
    <div>
      <h4 className="font-semibold mb-4">Get in Touch</h4>
      <ul className="space-y-3 text-sm text-gray-600">
        <li className="flex items-center space-x-2">
          <span className="material-icons text-[black]">email</span>
          <a href="mailto:support@ugiftd.com">support@ugiftd.com</a>
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
  <div className="border-t border-gray-300 mt-6 py-4 text-center text-sm text-gray-500">
    © UGiftd 2025. All Rights Reserved.
  </div>
</footer>

    </div>


  );
};

export default Navbar;
