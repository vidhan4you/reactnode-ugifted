import React, { useRef, useState } from "react";
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
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import cake1 from "../../assets/cake1.png"
import cake2 from "../../assets/cake2.png"
import uicone from "../../assets/uicone.png";
import emailIcon from "../../assets/email-icon.png";
import Pic from "../../assets/pic.png"
import calendar from "../../assets/calendar-icon.png"
import gift from "../../assets/gift.png"
import tag from "../../assets/tag-icon.png"
import FeatureBouquet from "../../assets/FeatureBouquet.png"
import payment from "../../assets/payment-icon.png"
import LogoBrand from "../../assets/Logo brand Layout 2.png"
import Line from "../../assets/Line.png"
import roundedimage from "../../assets/roundedimage.png"

import fotterimg from "../../assets/fotterimg.png"
import Weekly from "../../assets/weekly.png"
import Herb from "../../assets/herb.png"
import Component1 from "../../assets/Component 24 (1).png"
import Component2 from "../../assets/Component 25.png"
import Component3 from "../../assets/Component 26.png"
import icone1 from "../../assets/icone1.png"
// import arrow from "../../assets/arrow.png"
import shap from "../../../dist/assets/shap1.png"
import emailfooter from "../../assets/emailfooter.png"
import icone2 from "../../assets/icone2.png"
import arrow from "../../assets/arrow2.png"
import shap2 from "../../assets/shap2.png"
// import fram from "../../../dist/assets/fram3.png"
import icone3 from "../../assets/icone3.png"
// import arrow from "../../assets/arrow.png"
import shap3 from "../../assets/shap3.png"
import fram3 from "../../../dist/assets/fram3.png"
import icone4 from "../../assets/icone4.png"
// import arrow from "../../assets/arrow2.png"
import arrow2 from "../../assets/arrow2.png"
import shap4 from "../../assets/shap4.png"
import fram4 from "../../../dist/assets/fram4.png"
import fram1 from "../../assets/fram1.png"
import fram2 from "../../../dist/assets/fram2.png"
import { Link } from "react-router-dom"
import imageUser from "../../assets/image.png"
import backround1 from "../../assets/backround1.png"
import image2 from "../../assets/image.png"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import tracking from "../../assets/tracking.png"
import { A11y, EffectFade, Navigation } from 'swiper/modules';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const cards = [
    {
      label: "Birthday Bouquet",
      image: Component1,
      title: "Birthday Bouquet",
      desc: "Celebrate their special day with a vibrant bouquet full of birthday cheer",

    },
    {
      label: "Cakes",
      image: Component2,
      title: "Cakes",
      desc: "Mark every occasion with a fresh, delicious cake crafted just the way they love.",
    },
    {
      label: "Gift Baskets",
      image: Component3,
      title: "Gift Baskets",
      desc: "Thoughtfully curated baskets packed with delightful treats to brighten any occasion",
    },
  ];
  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description: "Add dates, gift types, and preferences in seconds.",
      frame: fram1,
      icon: icone1,
      arrow: arrow,
      bg: shap,
      iconClass: "absolute top-6 right-6 w-[85px] h-[85px]",
      arrowClass: "absolute right-[-23px] top-1/2 w-8 h-8",
      frameClass: "w-[160px] h-[172px] absolute top-[3px] right-42",
      containClass: "mt-auto",
    },
    {
      id: 2,
      title: "Let AI Do the Work",
      description: "Our intelligent system takes over from here.",
      frame: fram2,
      icon: icone2,
      arrow: arrow2,
      bg: shap2,
      iconClass: "absolute top-7 left-7 w-[85px] h-[85px]",
      arrowClass: "absolute left-[-23px] top-1/2 w-8 h-8",
      frameClass: "w-[160px] h-[172px] absolute top-[3px] left-42",
      containClass: "mt-auto",
    },
    {
      id: 3,
      title: "Automatic Payments",
      description: "Skip last-minute stress with auto-checkout.",
      frame: fram3,
      icon: icone3,
      arrow: arrow,
      bg: shap3,
      iconClass: "absolute bottom-7 right-7 w-[85px] h-[85px]",
      arrowClass: "absolute right-[-23px] top-1/2 w-8 h-8",
      frameClass: "w-[159px] h-[176px] absolute -bottom-[0px] left-[3px]",
      containClass: "mb-auto",
    },
    {
      id: 4,
      title: "Sit Back and Relax",
      description: "No more last-minute shopping or forgotten dates.",
      frame: fram4,
      icon: icone4,
      arrow: arrow2,
      arrowClass: "absolute left-[-23px] top-1/2 w-8 h-8",
      bg: shap4,
      iconClass: "absolute bottom-7 left-7 w-[85px] h-[85px]",
      frameClass: "w-[159px] h-[176px] absolute -bottom-[0px] right-[9px]",
      containClass: "mb-auto",
    },
  ];

  const testimonials = [
    {
      avatar: imageUser,
      title: "Reliable And Verified Staff",
      desc: "I Love Automation, And UGiftd Feels Like A Smart Plugin For My Life. I Added All My Events In 10 Minutes, Set Budgets, And Now I Just Sit Back. It Sends The Right Gift Every Single Time.",
      name: "Priya M.",
      role: "HR Manager",
    },
    {
      avatar: image2,
      title: "Great Support And Transparency",
      desc: "I Was Clueless About What To Gift My Partner For Our Anniversary. UGiftd Not Only Reminded Me But Also Picked A Gift Better Than I Could Have Chosen Myself — And It Was Delivered Right On Time.",
      name: "Raj B.",
      role: "Designer",
    },
    // add more cards here
  ];

  const swiperRef = useRef(null);

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const logos = [LogoBrand, Weekly, Herb, Weekly]; // original logos
  return (
    <div className="navbar-wrapper">
      {/* ===== Top Bar ===== */}
      <div className="top-bar p-0">
        {/* Email Box */}
        <div className="email-box">
          <div className="email-content">
            <span className="email-icon1">
              <img src={emailIcon} alt="Email Icon" className="email-img" />
            </span>
            <span className="email-text text-right text-[20px] font-semibold leading-[35px] tracking-normal">
              support@ugiftd.com
            </span>

          </div>
        </div>

        {/* Social Follow Section */}
        <div className="follow-container">
          <div className="follow-label">Follow on:</div>

          <div className="social-icons flex gap-[-2]">
            <a href="#" className="w-[41.88px] h-[42.01px] opacity-100 flex items-center justify-center rotate-0">
              <FaFacebookF />
            </a>
            <a href="#" className="w-[41.88px] h-[42.01px] opacity-100 flex items-center justify-center rotate-0">
              <FaInstagram />
            </a>
            <a href="#" className="w-[41.88px] h-[42.01px] opacity-100 flex items-center justify-center rotate-0">
              <FaTwitter />
            </a>
            <a href="#" className="w-[41.88px] h-[42.01px] opacity-100 flex items-center justify-center rotate-0">
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
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/contact" className="nav-link">CONTACT US</Link>
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
      {/* Hero Section */}
      <section
        className="hero-section flex items-center bg-gray-100 relative"
      >
        <div className="hero-content text-left px-6">
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
          <button
            className="relative order-navbtn text-black px-6 py-3 rounded-lg hover:bg-[#0661B5] transition-colors duration-300"
            style={{
              background: "linear-gradient(317.25deg, #0A2844 7.58%, #0661B5 75.45%)",
            }}
          >
            ORDER NOW
            <span className="absolute bottom-1 left-0 w-[8px] h-[2px] bg-white rounded"></span>
          </button>


        </div>



      </section>

      {/* Header */}


     <div className="bg-white px-6 py-16 text-black">
  <div className="flex flex-col md:flex-row items-center justify-around gap-16">

    {/* LEFT: Image Stack */}
    <div className="relative w-[666px] h-[670px] flex justify-center">
      {/* Back Image */}
      <div className="absolute w-[80vw] max-w-[408px] aspect-[408/573] rounded-xl shadow-lg 
                      transform md:-translate-x-[67px] md:translate-y-[23px] transition hover:scale-110">
        <img
          src={cake2}
          alt="Cake"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Front Image */}
      <div className="absolute w-[80vw] max-w-[408px] aspect-[408/573] rounded-xl shadow-lg 
                      transform translate-x-[127px] translate-y-[89px] 
                      md:translate-x-[211px] md:translate-y-[105px] z-10 transition hover:scale-110">
        <img
          src={cake1}
          alt="Cake"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>

    {/* RIGHT: Text Content */}
    <div className="max-w-[600px] w-full text-center md:text-left opacity-100">
      <h2
        className="font-bold capitalize mb-4"
        style={{
          fontWeight: 700,
          fontSize: "50px",
          lineHeight: "100%",
          letterSpacing: "0%",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <span className="text-gradient-ugiftd">About</span>{" "}
        <span className="font-extrabold text-[#0A2844]">UGiftd</span>
      </h2>

      <div className="h-[4px] w-[156px] bg-[#0661B5] mb-7 ml-[91px]"></div>

      <h3
        className="mb-4"
        style={{
          fontWeight: 500,
          fontStyle: "medium",
          fontSize: "24px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "black",
        }}
      >
        At UGiftd, our mission is simple
      </h3>

      <p className="text-[18px] md:text-[20px] leading-[1.75]">
        To make thoughtful gifting effortless and stress-free. In today's fast-paced world,
        remembering every birthday, anniversary, or special moment can be overwhelming.
        That's where we come in. Powered by intelligent AI and integrated with trusted gifting
        partners like 1-800-Flowers and FTD, UGiftd automates the entire process—from event
        planning and budget setting to gift selection and timely delivery. Whether it's a heartfelt
        message, a bouquet, or a cake, our system ensures each gesture is personalized, meaningful,
        and on time.

        We’re not just another gifting service—we’re your personal gifting assistant. Never miss a
        moment that matters. From birthdays to anniversaries, UGiftd makes thoughtful gifting
        automatic, easy, and perfectly timed. Trusted vendors. Secure payments. Zero stress.
      </p>
    </div>

  </div>
</div>



      <section
        className="py-16 relative"
        style={{
          width: "2248px",
          height: "905px",
          left: "-175px",
          position: "relative",
        }}
      >
        <h2
          className="text-center font-bold mb-12"
          style={{
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "capitalize",
            marginLeft: "-274px",

          }}
        >
          <span className="text-gradient-ugiftd">How</span>{" "}
          <span className="font-extrabold text-[#0A2844]">It Works</span>

          {/* Short underline */}
          <div className="mx-auto mt-2 h-1 w-36 bg-[#0661B5] rounded"></div>
        </h2>




        {/* Steps Background */}
        <div
          className=" px-4 md:px-8 lg:px-88 py-10"
          style={{
            backgroundImage: `url(${backround1})`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-1/2 ml-[202px]">
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
                    <p className="text-black">{step.description}</p>
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

      <section
        className="gift-section py-16"
        style={{
          width: "1540px",
          height: "300px",
          top: "-63px",
          left: "-110px",
          position: "relative",
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      >
        <h2
          className="text-center font-bold"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "76px",
            letterSpacing: "-0.03em",
            textTransform: "capitalize",
          }}
        >
          <span className="relative inline-block pt-[98px] left-[74px]">
            Deliver Joy To{" "}
            <span className="text-gradient-ugiftd">Their Doorstep</span>
            <span className="block mx-auto mt-2 h-[4px] w-[156px] bg-[#0661B5]"></span>
          </span>
        </h2>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-70 mt-12 w-full px-40">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative group p-6 bg-white shadow-lg transition hover:shadow-xl rounded-lg"
              style={{ width: "416px", height: "552px" }}
            >
              {/* Label (top-right button with exact size & position) */}
              <div
                className="absolute flex items-center justify-center text-white font-semibold z-20"
                style={{
                  background: "linear-gradient(317.25deg, #0A2844 7.58%, #0661B5 75.45%)",
                  width: "179px",
                  height: "43px",
                  top: "64px",
                  left: "300px",
                  borderRadius: "100px",
                  padding: "9px 14px",
                  gap: "10px",
                }}
              >
                {card.label}
              </div>

              {/* Image with hover overlay */}
              <div className="relative w-full h-[404px] mb-6 rounded-lg overflow-hidden">
                {typeof card.image === "string" ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <card.image className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
                )}

                {/* Light blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-lg z-10"></div>

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button className="bg-gradient-to-r from-[#0A2844] to-[#0661B5] text-white font-semibold px-6 py-2 rounded-full transition transform hover:scale-105 w-[170px] h-[56px]">
                    Order Now
                  </button>

                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
              <p className="text-black text-center">{card.desc}</p>
            </div>
          ))}


        </div>
      </section>





      <section
        className="key-features-section bg-white"
        style={{
          paddingTop: "435px",
          paddingInline: "calc(var(--spacing) * -21)",
        }}
      >
        <h2
          className="text-center mb-12 font-poppins"
          style={{
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "capitalize",
            paddingTop: "142px",
          }}
        >
          <span className="text-[#0A2844]">Key</span>{" "}
          <span className="text-gradient-ugiftd font-extrabold">Features</span>

          {/* Short underline */}
          <div className="mx-auto mt-2 h-1 w-36 bg-[#0661B5] rounded"></div>
        </h2>



        <div
          className="grid grid-cols-1 lg:grid-cols-3 items-start w-full px-32 mx-auto"
          style={{ gap: "calc(var(--spacing) * 38)" }}
        >

          {/* Left Column */}
          <div className="flex flex-col justify-between w-full" style={{ height: "553px" }}>
            <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
                <img src={gift} alt="AI-Based Gifting" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">AI-Based Gifting</h3>
                  <p className="text-black">
                    Let smart technology choose the perfect gift—on time, every time.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
                <img src={calendar} alt="Event Scheduler" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Event Scheduler</h3>
                  <p className="text-black">
                    Plan birthdays, anniversaries, and more in minutes—set it and forget it.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
                <img src={tag} alt="Smart Purchase Logic" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Smart Purchase Logic</h3>
                  <p className="text-black">
                    Auto-selects gifts based on your budget, preferences, and timing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}

          {/* Center Image */}
          <div
            className="flex justify-center items-center"
            style={{
              padding: "0px 20px",
              width: "553px",
              height: "553px",
              marginLeft: "-116px",
            }}
          >
            <img
              src={FeatureBouquet}
              alt="Feature Bouquet"
              style={{
                
                borderRadius: "20px",
                opacity: 1,
                transform: "rotate(0deg)",
                objectFit: "cover",   // keeps the image proportional
              }}
            />
          </div>




          {/* Right Column */}
          <div className="flex flex-col justify-between w-full" style={{ height: "553px" }}>
            <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
                <img src={payment} alt="Auto Payment" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Auto Payment System</h3>
                  <p className="text-black">
                    Securely charged only when a gift is ready—fully automated and worry-free.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
               <img src={tracking} alt="tracking" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Delivery Tracking</h3>
                  <p className="text-black">
                    Track every gift from purchase to doorstep, with real-time updates.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start text-left gap-2 pb-4 border-b border-gray-300">
                <img src={emailIcon} alt="Email Notifications" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Email Notifications & Reminders</h3>
                  <p className="text-black">
                    Stay informed with timely alerts before purchases and special dates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section

        className="why-section bg-[#EBF4FF] flex flex-col items-center py-16 px-6"
        style={{
          height: "607px",
          opacity: 1,
          transform: "rotate(0deg)",
          paddingTop: "20px",
          marginTop: "64px",
        }}
      >
        {/* Section Heading */}
        <h2
          className="text-start text-3xl md:text-4xl font-bold mb-12"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "76px",
            letterSpacing: "-3%",
            textTransform: "capitalize",
            paddingTop: "57px",
          }}
        >
          Why <span className="text-gradient-ugiftd">UGiftd?</span>
          <div className="h-1 w-36 bg-[#0661B5] mx-auto mt-2"></div>
        </h2>


        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">


          {[
            {
              number: "01",
              title: "Always On Time",
              desc: "Never miss a birthday, anniversary, or special occasion again.",
            },
            {
              number: "02",
              title: "Time-Saving Convenience",
              desc: "Say goodbye to last-minute panic and rushed decisions.",
            },
            {
              number: "03",
              title: "Personalized Within Budget",
              desc: "Gifts tailored to each event—thoughtful and cost-friendly.",
            },
            {
              number: "04",
              title: "Trusted Vendor Network",
              desc: "Powered by partners like 1-800-Flowers and FTD.",
            },
            {
              number: "05",
              title: "Secure & Hassle-Free",
              desc: "Automated payments and delivery with complete peace of mind.",
            },
            {
              number: "06",
              title: "Full Control & Customization",
              desc: "Easily update events, budgets, and preferences anytime.",
            },
          ].map((feature, idx) => (
            <div className="flex gap-4" key={idx}>
              <div className="flex flex-col items-center">
                <span
                  className="text-white text-lg font-bold flex items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(317.25deg, #0A2844 7.58%, #0661B5 75.45%)",
                    width: "48px",
                    height: "48px",

                  }}
                >
                  {feature.number}
                </span>
                <img src={Line} alt="Line" className="h-16" />
              </div>
              <div>

                <h3 className="feature-title font-poppins font-semibold text-[25px] leading-[100%] tracking-[0%] text-left mt-[19px]">
                  {feature.title}
                </h3>

                <p className="text-black">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="testimonial-arc-section pt-[156px]">
        {/* Decorative Half Arc Image */}
        <div className="testimonial-bg">
          <div className="testimonial-bg-image  mt-[-109px]">
            <img src={roundedimage} alt="Background" />
          </div>
        </div>

        <h2 className="testimonial-arc-heading text-center text-4xl font-bold -mt-[5px] mb-[86px] relative">
          User <span className="text-gradient-ugiftd">Testimonials</span>

          {/* Gradient underline */}
          <div className="mx-auto mt-4 h-[4px] w-[156px] bg-gradient-to-r from-[#0A2844] to-[#0661B5] rounded"></div>
        </h2>




        <div
          className="testimonial-arc-card mt-[88px] flex gap-[53px] p-6 rounded-lg shadow-lg mx-auto transition-transform duration-500"
          style={{
            width: "778px",
            // height: "383px",
            // transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper w-full -mt-[95px]"
            spaceBetween={0}
            slidesPerView={1}
            effect={'fade'}
            navigation={false} // disable default navigation
            // scrollbar={{ draggable: true }}
            modules={[Navigation, A11y, EffectFade]}
            speed={400}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="gap-[53px] flex flex-col items-center justify-center">
                  <div className="testimonial-arc-avatar flex flex-col items-center justify-center flex-shrink-0">
                    <img src={t.avatar} alt="User" className="rounded-full w-24 h-24 object-cover" />
                  </div>
                  <div className="testimonial-arc-content flex flex-col justify-between gap-4">
                    <div className="testimonial-arc-title text-[24px] font-medium font-poppins leading-[100%] tracking-[0%] text-center capitalize">
                      {t.title}
                    </div>
                    <div className="testimonial-arc-desc text-black text-[20px] text-center">{t.desc}</div>
                    <div className="flex flex-col pt-[36px] text-center">
                      <div className="testimonial-arc-name font-semibold">{t.name}</div>
                      <div className="testimonial-arc-role text-black">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Arrows */}
        <div className="testimonial-arc-nav flex justify-center gap-4 mt-6 pl-[17px] z-10 relative ">
          <button onClick={prevSlide} className="testimonial-arc-btn">
            {"<"}
          </button>
          <button onClick={nextSlide} className="testimonial-arc-btn">
             {">"}
          </button>
        </div>

      </section>

      {/* ===== Trusted Section ===== */}
      <section className="trusted-section">
        <h2 className="trusted-heading">
          Trusted By Top UGiftd <span>Brands</span>
          <div className="trusted-underline"></div>
        </h2>



        {/* Logos Carousel */}


        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee gap-8 w-max">
            {[...logos, ...logos, ...logos].map((logo, idx) => ( // duplicated 3 times
              <div key={idx} className="brand-logo w-50 flex-shrink-0">
                <img src={logo} alt={`Logo ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== Footer Section ===== */}
      <footer className="footer-wrapper">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-logo-section">
            <img src={fotterimg} alt="UGiftd Logo" />
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
                <img src={emailfooter} alt="Email" className="w-5 h-5" />support@ugiftd.com
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

}
export default Navbar;