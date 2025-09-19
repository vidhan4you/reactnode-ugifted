import React, { useState } from "react";
import "./Navbar.css";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaSearch,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { Link } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const cards = [
    {
      label: "Birthday Bouquet",
      image: "/src/assets/Component 24 (1).png",
      title: "Birthday Bouquet",
      desc: "Celebrate their special day with a vibrant bouquet full of birthday cheer",
    },
    {
      label: "Cakes",
      image: "/src/assets/Component 25.png",
      title: "Cakes",
      desc: "Mark every occasion with a fresh, delicious cake crafted just the way they love.",
    },
    {
      label: "Gift Baskets",
      image: "/src/assets/Component 26.png",
      title: "Gift Baskets",
      desc: "Thoughtfully curated baskets packed with delightful treats to brighten any occasion",
    },
  ];
  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description: "Add dates, gift types, and preferences in seconds.",
      frame: "/src/assets/fram2.png",
      icon: "/src/assets/icone1.png",
      arrow: "/src/assets/arrow.png",
      bg: "/src/assets/shap1.png",
      iconClass: "absolute top-6 right-6 w-[85px] h-[85px]",
      arrowClass: "absolute right-[-23px] top-1/2 w-8 h-8",
      frameClass: "w-[174px] h-[182px] absolute top-[calc(0px_-_10px)] left-0",
      containClass: "mt-auto"
    },
    {
      id: 2,
      title: "Let AI Do the Work",
      description: "Our intelligent system takes over from here.",
      frame: "/src/assets/fram2.png",
      icon: "/src/assets/icone2.png",
      arrow: "/src/assets/arrow2.png",
      bg: "/src/assets/shap2.png",
      iconClass: "absolute top-7 left-7 w-[85px] h-[85px]",
      arrowClass: "absolute left-[-23px] top-1/2 w-8 h-8",
      frameClass: "w-[174px] h-[182px] absolute top-[calc(0px_-_10px)] right-0",
      containClass: "mt-auto"
    },
    {
      id: 3,
      title: "Automatic Payments",
      description: "Skip last-minute stress with auto-checkout.",
      frame: "/src/assets/fram3.png",
      icon: "/src/assets/icone3.png",
      arrow: "/src/assets/arrow.png",
      bg: "/src/assets/shap3.png",
      iconClass: "absolute bottom-7 right-7 w-[85px] h-[85px]",
      arrowClass: "absolute right-[-23px] top-1/2 w-8 h-8",
      frameClass: "w-[174px] h-[182px] absolute -bottom-[30px] left-[25px]",
      containClass: "mb-auto"
    },
    {
      id: 4,
      title: "Sit Back and Relax",
      description: "No more last-minute shopping or forgotten dates.",
      frame: "/src/assets/fram4.png",
      icon: "/src/assets/icone4.png",
      arrow: "/src/assets/arrow2.png",
      bg: "/src/assets/shap4.png",
      iconClass: "absolute bottom-7 left-7 w-[85px] h-[85px]",
      arrowClass: "absolute left-[-23px] top-1/2 w-8 h-8",
      frameClass: "w-[174px] h-[182px] absolute -bottom-[30px] right-[30px]",
      containClass: "mb-auto"
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
          <img src="/src/assets/uicone.png" alt="ugiftd logo" width="289px" />
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="contact">CONTACT US</a>
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
      {/* Hero Section */}
      <div className="hero-section flex items-center min-h-screen px-8 bg-gray-100">
        <div className="hero-content text-left">
          <h1 className="hero-heading text-4xl font-bold mb-4">
            NEVER FORGET A <br />
            SPECIAL MOMENT <br />
            AGAIN
          </h1>
          <p className="hero-text text-lg mb-6">
            AI-Powered Gifting Platform That Automatically Chooses, <br />
            Buys, And Delivers Perfect Gifts For Your Loved Ones—Right <br />
            On Time.
          </p>
          <button className="order-btn bg-blue-600 text-black px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            ORDER NOW
          </button>
        </div>
      </div>


      <div className="bg-white px-6 py-16 text-black">
        <div className="flex flex-col md:flex-row items-center justify-around gap-16">

          {/* LEFT: Image Stack */}
          <div className="relative w-full md:w-[500px] h-[600px] flex justify-center">
            {/* Back Image */}
            <div className="absolute w-[80vw] max-w-[408px] aspect-[408/573] rounded-xl shadow-lg transform md:translate-x-[-67px] md:translate-y-[23px] transition hover:scale-110">
              <img src="/src/assets/cake2 (1).png" alt="Cake" className="w-full h-full object-cover rounded-xl" />
            </div>
            {/* Front Image */}
            <div className="absolute w-[80vw] max-w-[408px] aspect-[408/573] rounded-xl shadow-lg transform translate-x-[127px] translate-y-[89px] md:translate-x-[211px] md:translate-y-[105px] z-10 transition hover:scale-110">
              <img src="/src/assets/cake1.png" alt="Bouquet" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="max-w-[600px] text-center md:text-left">
            <h2 className="text-[88px] font-bold mb-4">
              <span className="text-blue-600">About</span>{" "}
              <span className="font-extrabold">UGiftd</span>
            </h2>
            <div className="h-[4px] w-[80px] bg-blue-600 mb-6 mx-auto md:mx-0"></div>
            <h3 className="text-[24px] font-semibold mb-4">At UGiftd, our mission is simple</h3>
            <p className="text-[20px] leading-[1.75]">
              To make thoughtful gifting effortless and stress-free. In today's fast-paced world,
              remembering every birthday, anniversary, or special moment can be overwhelming.
              That's where we come in. Powered by intelligent AI and integrated with trusted gifting
              partners like 1-800-Flowers and FTD, UGiftd automates the entire process—from event
              planning and budget setting to gift selection and timely delivery. Whether it's a heartfelt
              message, a bouquet, or a cake, our system ensures each gesture is personalized, meaningful,
              and on time.
              <br /><br />
              We’re not just another gifting service—we’re your personal gifting assistant. Never miss a
              moment that matters. From birthdays to anniversaries, UGiftd makes thoughtful gifting
              automatic, easy, and perfectly timed. Trusted vendors. Secure payments. Zero stress.
            </p>
          </div>

        </div>
      </div>

      <section className="py-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 underline underline-offset-4 decoration-blue-600">
          <span className="text-blue-600">How</span>{" "}
          <span className="font-extrabold">It Works</span>
        </h2>

        {/* Steps Background */}
        <div
          className="w-full px-4 md:px-8 lg:px-16 py-10"
          style={{
            backgroundImage: "url('/src/assets/backround1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-1/2 mx-auto">
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-x-[100px] gap-y-[60px] justify-center">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center p-8 w-[calc(50%_-_50px)] h-[322px] rounded-2xl"
                  style={{
                    backgroundImage: `url(${step.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Frame */}
                  {step.frame && (
                    <img src={step.frame} alt="Frame" className={step.frameClass} />
                  )}

                  {/* Icon */}
                  {step.icon && (
                    <img src={step.icon} alt="icon" className={step.iconClass} />
                  )}

                  {/* Text */}
                  <div className={step.containClass}>
                    <h3 className="text-xl font-bold ">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>

                  {/* Arrow (if exists) */}
                  {step.arrow && (
                    <img src={step.arrow} alt="arrow" className={step.arrowClass} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gift-section py-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold underline underlin">
          Deliver Joy To <span className="text-[#0661B5]">Their Doorstep</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative group p-6 bg-white shadow-lg transition hover:shadow-xl"
              style={{
                width: "376px",
                height: "450px",
                borderRadius: "10px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#e5e7eb",
                opacity: 1,
                transform: "rotate(0deg)",
                marginLeft: "130px",
              }}
            >
              {/* Label */}
              <div
                className="absolute text-white font-semibold rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "#0661B5",
                  width: "161px",
                  height: "41px",
                  left: "calc(var(--spacing) * 77)",
                  textAlign: "center",
                }}
              >
                {card.label}
              </div>

              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[267px] object-cover rounded-lg mb-6 "
              />

              {/* Text */}
              <h3 className="text-xl font-bold mb-2 ">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="key-features-section py-16 bg-white">
        {/* Header - stays centered */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Key <span className="text-blue-600">Features</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div
            className="flex flex-col gap-8"
            style={{
              width: "358.22px",
              height: "579px",
              top: "20px",
              left: "292px",
              position: "relative",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            {/* Feature 1 */}
            <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
              <img
                src="/src/assets/gift.png"
                alt="AI-Based Gifting"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-semibold">AI-Based Gifting</h3>

                Let smart technology choose the perfect gift—on time, every time.

              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
              <img
                src="/src/assets/calendar-icon.png"
                alt="Event Scheduler"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-semibold">Event Scheduler</h3>
                <p className="text-gray-600">
                  Plan birthdays, anniversaries, and more in minutes—set it and forget it.
                </p>
              </div>
            </div>




            {/* Feature 3 */}
            <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
              <img src="/src/assets/tag-icon.png" alt="Smart Purchase Logic" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold">Smart Purchase Logic</h3>
                <p className="text-gray-600">
                  Auto-selects gifts based on your budget, preferences, and timing.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "555.76px",
              height: "535px",
              left: "58px",
              top: "-22px",
              position: "relative",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            <img
              src="/src/assets/1343.png"
              alt="Feature Bouquet"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Right Column */}
          <div
            className="flex flex-col gap-8 p-6"
            style={{
              width: "978.22px",
              height: "619px",
              position: "relative",
              top: "0px",
              left: "0px",

              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            {/* Feature 1 */}
            <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
              <img src="/src/assets/payment-icon.png" alt="Auto Payment" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold">Auto Payment System</h3>
                <p className="text-gray-600">
                  Securely charged only when a gift is ready—fully automated and worry-free.
                </p>
              </div>
            </div>



            {/* Feature 2 */}
            <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
              <img src="/src/assets/tracking-icon.png" alt="Delivery Tracking" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold">Delivery Tracking</h3>
                <p className="text-gray-600">
                  Track every gift from purchase to doorstep, with real-time updates.
                </p>
              </div>
            </div>



            {/* Feature 3 */}
            <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
              <img src="/src/assets/email-icon.png" alt="Email Notifications" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold">Email Notifications & Reminders</h3>
                <p className="text-gray-600">
                  Stay informed with timely alerts before purchases and special dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section
        className="why-section bg-[#EBF4FF] flex flex-col items-center"
        style={{
          width: "1920px",
          height: "607px",
          padding: "69px 354px",
          gap: "10px",
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      >
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Why <span className="text-blue-600">UGiftd?</span>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-2"></div>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {/* Feature 01 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="text-white text-lg font-bold flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#0661B5",
                  width: "48px",
                  height: "48px",
                }}
              >
                01
              </span>

              <img src="/src/assets/Line 1713.png" alt="Line" className="h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Always On Time</h3>
              <p className="text-gray-600">
                Never miss a birthday, anniversary, or special occasion again.
              </p>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="text-white text-lg font-bold flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#0661B5",
                  width: "48px",
                  height: "48px",
                }}
              >
                02
              </span>

              <img src="/src/assets/Line 1713.png" alt="Line" className="h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Time-Saving Convenience</h3>
              <p className="text-gray-600">
                Say goodbye to last-minute panic and rushed decisions.
              </p>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="text-white text-lg font-bold flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#0661B5",
                  width: "48px",
                  height: "48px",
                }}
              >
                03
              </span>

              <img src="/src/assets/Line 1713.png" alt="Line" className="h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Personalized Within Budget</h3>
              <p className="text-gray-600">
                Gifts tailored to each event—thoughtful and cost-friendly.
              </p>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="text-white text-lg font-bold flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#0661B5",
                  width: "48px",
                  height: "48px",
                }}
              >
                04
              </span>

              <img src="/src/assets/Line 1713.png" alt="Line" className="h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Trusted Vendor Network</h3>
              <p className="text-gray-600">
                Powered by partners like 1-800-Flowers and FTD.
              </p>
            </div>
          </div>

          {/* Feature 05 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="text-white text-lg font-bold flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#0661B5",
                  width: "48px",
                  height: "48px",
                }}
              >
                05
              </span>

              <img src="/src/assets/Line 1713.png" alt="Line" className="h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Secure & Hassle-Free</h3>
              <p className="text-gray-600">
                Automated payments and delivery with complete peace of mind.
              </p>
            </div>
          </div>

          {/* Feature 06 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="text-white text-lg font-bold flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#0661B5",
                  width: "48px",
                  height: "48px",
                }}
              >
                06
              </span>

              <img src="/src/assets/Line 1713.png" alt="Line" className="h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Full Control & Customization</h3>
              <p className="text-gray-600">
                Easily update events, budgets, and preferences anytime.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== Testimonials Section ===== */}
      <section className="testimonial-arc-section">
        {/* Decorative Half Arc Image */}
        <div className="testimonial-bg">
          <div className="testimonial-bg-image">
            <img src="/src/assets/roundedimage.png" alt="Background" />
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="testimonial-arc-heading">
          User <span className="highlight">Testimonials</span>
    
        </h2>

        {/* Testimonial Card */}
        <div className="testimonial-arc-card">
          <div className="testimonial-arc-avatar">
            <img src="/src/assets/image.png" alt="User" />
          </div>
          <div className="testimonial-arc-content">
            <div className="testimonial-arc-title">Reliable And Verified Staff</div>
            <div className="testimonial-arc-desc">
              I Love Automation, And UGiftd Feels Like A Smart Plugin For My Life.
              I Added All My Events In 10 Minutes, Set Budgets, And Now I Just Sit Back.
              It Sends The Right Gift Every Single Time.
            </div>
            <div className="testimonial-arc-name">Priya M.</div>
            <div className="testimonial-arc-role">HR Manager</div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="testimonial-arc-nav flex justify-center gap-4 mt-6">
          <button className="testimonial-arc-btn">{'<'}</button>
          <button className="testimonial-arc-btn">{'>'}</button>
        </div>
      </section>

      {/* ===== Trusted Section ===== */}
      <section className="trusted-section">
        <h2 className="trusted-heading">
          Trusted By Top UGiftd <span className="trusted-highlight">Brands</span>
          <div className="heading-underline"></div>
        </h2>

        {/* Logos Carousel */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-marquee">
            <div className="brand-logo"><img src="/src/assets/Logo brand Layout 2.png" alt="Men's Journal" /></div>
            <div className="brand-logo"><img src="/src/assets/weekly.png" alt="LA Weekly" /></div>
            <div className="brand-logo"><img src="/src/assets/herb.png" alt="Herb" /></div>
            <div className="brand-logo"><img src="/src/assets/flower.png" alt="NY Times" /></div>

            {/* Duplicates for infinite scroll */}
            <div className="brand-logo"><img src="/src/assets/Logo brand Layout 2.png" alt="Men's Journal" /></div>
            <div className="brand-logo"><img src="/src/assets/weekly.png" alt="LA Weekly" /></div>
            <div className="brand-logo"><img src="/src/assets/herb.png" alt="Herb" /></div>
            <div className="brand-logo"><img src="/src/assets/flower.png" alt="NY Times" /></div>
          </div>
        </div>
      </section>
      {/* ===== Footer Section ===== */}
      <footer className="footer-wrapper">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-logo-section">
            <img src="/src/assets/uicone.png" alt="UGiftd Logo" />
            <p>
              Never miss a moment that matters. From birthdays to anniversaries,
              UGiftd makes thoughtful gifting automatic, easy, and perfectly timed.
              Trusted vendors. Secure payments. Zero stress.
            </p>
          </div>

          {/* Columns */}
          <div className="footer-columns">
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <ul>
                <li>About Us</li>
                <li>How it Works</li>
                <li>Deliver Joy</li>
                <li>Key Features</li>
                <li>Why UGiftd?</li>
                <li>User Testimonials</li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Services</div>
              <ul>
                <li>Event-Based Gifting</li>
                <li>AI-Powered Gifts</li>
                <li>Event Scheduling</li>
                <li>Auto Payments</li>
                <li>Custom Gifting</li>
              </ul>
            </div>

            <div className="footer-contact">
              <div className="footer-contact-title">Get in Touch</div>
              <div className="footer-contact-row">
                <FaEnvelope /> support@ugiftd.com
              </div>
              <div className="footer-social">
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaFacebookF /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom"> © UGiftd 2025. All Rights Reserved. </div> </footer> </div>
  );
};

export default Navbar;


