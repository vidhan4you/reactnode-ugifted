import React, { useState } from "react";
import "./aboutus.css";
import heroBg from "/src/assets/flowersabout.png";
import VectorBg from "../../assets/VectorBg.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import fotterimg from "../../assets/fotterimg.png";
import roundedarrow from "../../assets/roundedarrow.png";
import calenderakar from "../../assets/calenderakar.png";
import dollersign from "../../assets/dollersign.png";
import crossarrow from "../../assets/crossarrow.png";
import emailIcon from "../../assets/email-icon.png";
import uicone from "../../assets/uicone.png";
import Pic from "../../assets/pic.png";
import laba from "../../assets/laba.png"

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
import icon4 from "../../assets/icon4.png";
import CoupleImage from "../../assets/CoupleImage.png";

const About = () => {
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

  const cards = [
    {
      title: "AI-Based Gift Selection",
      description:
        "Our intelligent gifting assistant uses smart algorithms to choose the perfect gift for your loved ones, tailored to your selected budget, event type, and preferences.",
      lefticone: roundedarrow,
      rightIcon: crossarrow,
    },
    {
      title: "Effortless Event Scheduling",
      description:
        "Plan once and stay covered for the whole year. Add special dates like birthdays, anniversaries, or Valentine’s Day.",
      lefticone: calenderakar,
      rightIcon: crossarrow,
    },
    {
      title: "Auto Payments & Seamless Delivery",
      description:
        "We’ll automatically process your payments before the event and ensure timely delivery so your gifts never arrive late.",
      lefticone: dollersign,
      rightIcon: crossarrow,
    },
  ];

  return (
    <div className="navbar-wrapper">
      {/* ===== Top Bar ===== */}
      <div className="top-bar">
        <div className="email-box">
          <div className="email-content">
            <span className="email-icon1">
                <img src={emailIcon} alt="Email Icon" className="email-img" />
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
         <img src={uicone} alt="ugiftd logo" />
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
            <img src={Pic} alt="User avatar" className="avatar" />
          
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
        className="about-section relative w-full h-[450px] overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          paddingTop: "137px",
          paddingRight: "300px",
          paddingBottom: "137px",
          paddingLeft: "300px",
          gap: "10px",
        }}
      >
        <div className="about-content relative z-[99]">
          {/* Breadcrumb Button */}
          <button
            className="flex items-center justify-between w-[189px] h-[48px] px-7 py-[11px] bg-[#0661B5] text-white rounded-[10px] hover:bg-blue-700 transition-opacity absolute"
            style={{ top: "0", left: "0", opacity: 1 }}
          >
            <Home className="w-5 h-5 mr-2" />
            <span>Home &gt; About</span>
          </button>

          {/* Heading */}
          <h1
            className="absolute text-4xl font-bold"
            style={{ top: "68px", left: "0", width: "229px", height: "75px", opacity: 1, fontSize: "47px" }}
          >
            About Us
          </h1>

          {/* Subtitle */}
          <p
            className="absolute text-lg font-medium"
            style={{ top: "123px", left: "0", width: "384px", height: "36px", opacity: 1 }}
          >
            Where AI Meets Heartfelt Gifting
          </p>
        </div>

        {/* Optional Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #e5e5ef, rgb(209 214 219), rgb(118 127 136))",
            opacity: 0.5,
          }}
        />
      </div>

      <section
        className="relative py-16 ">

        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT: Content */}

          <div className="who-we-are-content flex-1 space-y-4">
            <div
              className="who-we-are-icon mb-4 rounded-full flex items-center justify-center w-16 h-16"
              style={{
                background: "linear-gradient(317.25deg, #0A2844 7.58%, #0661B5 75.45%)",
              }}
            >
              <img src={icon4} alt="Icon" className="w-8 h-8" />
            </div>


            <div className="flex-1 space-y-6">

              <h2 className="text-4xl font-extrabold text-gray-900">

                Who <span className="text-blue-600">We Are</span>
              </h2>

              <p className="text-black leading-relaxed">
                UGiftd is your AI-powered personal gifting assistant, designed to help you
                stay connected through meaningful, on-time gifts—without the stress.
                Whether it’s a birthday, anniversary, or a surprise gesture, we ensure
                every important moment is remembered and celebrated effortlessly.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>Smart gifts, perfectly matched.</li>
                <li>Set once and we’ll handle the rest, year after year.</li>
                <li>Your card is charged securely before the event, no last-minute hassle.</li>
                <li>Seamless delivery with trusted partners.</li>
              </ul>
            </div>
          </div>
          {/* RIGHT: Image */}
          <div className="flex-1 flex justify-center">
           <img src={laba} alt="laba" className="laba" />
          </div>

        </div>
      </section>

      <section
        className="relative mx-auto flex gap-10"
        style={{
          width: "100%",
          height: "616px",

          left: "255px",
        }}
      >
        {/* ==== LEFT IMAGE ==== */}
        <div className="relative">
          <img
            src={CoupleImage}
            alt="Couple"
            style={{
              width: "100%",
              height: "588px",
              borderRadius: "20px",
              left: "45px",
            }}
          />

          {/* Experience Badge */}
          <div className="absolute bottom-6 left-[-33px] bg-gradient-to-r from-[#0661B5] to-[#004080] text-white rounded-xl px-12 py-8 flex flex-col items-start shadow-lg">
            <div className="text-3xl font-bold">25+</div>
            <p className="text-sm">Years Of Experience</p>
            <div className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded-md shadow">
              ⭐ 4.9
            </div>
          </div>
        </div>

        {/* ==== RIGHT CONTENT ==== */}
        <div className="flex flex-col justify-center max-w-[700px]">
          {/* Subtitle */}
          <p className="text-[#0661B5] font-semibold text-sm border-b-2 border-[#0661B5] inline-block mb-4">
            Our Mission
          </p>

          {/* Title */}
          <h2 className="text-4xl font-extrabold leading-snug mb-4">
            Making Every Gift Count,{" "}
            <span className="text-[#0661B5]">Effortlessly</span>
          </h2>

          {/* Description */}
          <p className="text-black text-lg leading-relaxed mb-6">
            Our mission is to simplify the act of giving by combining smart
            automation with a personal touch—so no birthday, anniversary, or
            special day ever gets forgotten.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 text-black">
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 bg-[#0661B5] rounded-full flex items-center justify-center text-white">✔</span>
              We ensure no important date slips through the cracks.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 bg-[#0661B5] rounded-full flex items-center justify-center text-white">✔</span>
              Our smart system selects gifts that feel personal and appropriate.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 bg-[#0661B5] rounded-full flex items-center justify-center text-white">✔</span>
              No more last-minute shopping or scheduling stress.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-6 h-6 bg-[#0661B5] rounded-full flex items-center justify-center text-white">✔</span>
              Create deeper connections through timely and meaningful gestures.
            </li>
          </ul>
        </div>
      </section>

      <section
        className="relative mx-auto flex gap-[93px]"
        style={{
          width: "1320px",
          height: "738px",

          left: "300px",
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      >
        {/* ==== LEFT SIDE ==== */}
        <div
          className="flex flex-col justify-between"
          style={{
            width: "510px",
            marginLeft: "-217px",
            paddingTop: "92px",
            paddingBottom: "217px",
          }}
        >
          {/* Heading */}
          <div>
            <h2 className="text-4xl font-extrabold text-black">
              What We <span className="text-[#0661B5]">Offer</span>
            </h2>
            <p className="mt-6 text-black text-base leading-relaxed">
              UGiftd simplifies the art of thoughtful giving by combining smart
              automation with personalized touches. From intelligent gift selection
              to seamless delivery and payment, we handle every step so you never
              miss a moment that matters. Whether it’s a birthday, anniversary, or
              a surprise “just because,” we ensure your gifts are meaningful,
              timely, and within budget—every single time.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-y-6 mt-8">
            <div>
              <div className="flex items-center -space-x-3 mb-2">
                <img src={user1} className="w-10 h-10 rounded-full border-2 border-white" alt="User 1" />

                <img src={user2} className="w-10 h-10 rounded-full border-2 border-white" alt="User 1" />
                <img src={user3} className="w-10 h-10 rounded-full border-2 border-white" alt="User 1" />
                <img src={user1} className="w-10 h-10 rounded-full border-2 border-white" alt="User 1" />
              </div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-black">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">78+</h3>
              <p className="text-black">Project Delivered</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">7+</h3>
              <p className="text-black">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">30+</h3>
              <p className="text-black">Team Members</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-[100px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-6 bg-no-repeat bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${VectorBg})`,
                width: "534px",
                height: "164px",
                borderRadius: "20px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              {/* Left Icon */}
              {/* Left Icon */}
              <div className="absolute top-3 -left-1 w-14 h-14 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img src={card.lefticone} alt="Left Icon" className="w-7 h-7" />
              </div>

              {/* Right Icon */}
              <div className="absolute top-30 -right-1 w-12 h-12 rounded-full flex items-center justify-center bg-[#0661B5]">
                <img src={card.rightIcon} alt="Right Icon" className="w-6 h-6" />
              </div>

              <div className="ml-[54px] mt-4">
                <h4 className="text-lg font-semibold text-[#0661B5] mb-4 text-justify">
                  {card.title}
                </h4>
                <p className="text-black text-sm text-start">{card.description}</p>
              </div>
            </div>
          ))}
        </div>



      </section >




      <footer className="bg-[#E9F1F9] text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2">
              <img src={fotterimg} alt="UGiftd Logo" />

            </div>
            <p className="mt-4 text-sm leading-relaxed text-black max-w-xs">
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
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-black">
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
        <div className="border-t border-gray-300 mt-6 py-4 text-center text-sm text-black">
          © UGiftd 2025. All Rights Reserved.
        </div>
      </footer>

    </div >


  );
};

export default About;
