import React from "react";
import "./App.css";
import video from "./video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Data from "./Rishi";
import TogglePage from "./TogglePage";

const App = () => {
  const customPadding = {
    paddingTop: "170px",
    paddingBottom: "20px",
  };

  const twopic = {
    paddingTop: "80px",
  };



  return (

<div className="font-[Poppins]">
      <header className="bg-white fixed w-full top-0 z-50">
        <nav className="bg-black flex justify-between items-center py-4">
          <div className="px-16">
            <img
              className="w-28"
              src="https://posphilly.com/wp-content/uploads/2022/12/cropped-SpotOn_Logo-removebg-preview11.png"
              alt="SpotOn"
            />
          </div>
          <div>
            <ul className="flex items-center text-white gap-[3vw]">
              <li className="hover:underline underline-offset-8">
                <a href="">Home</a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="">Business Type</a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="">Solutions</a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="">Resources</a>
              </li>
              <li className="hover:underline underline-offset-8">
                <a href="">Why SpotOn?</a>
              </li>
            </ul>
          </div>
          <div className="px-16">
            <button className="bg-black px-8 py-4 mx-4 border border-white text-white rounded-full hover:bg-blue-600 hover:border-black">
              Login
            </button>
            <button className="bg-blue-600 px-8 py-4 text-white rounded-full hover:bg-blue-700">
              Get a demo
            </button>
          </div>
        </nav>
      </header>

      <div
        class="gap-4 bg-black text-white flex flex-col items-center justify-center"
        style={customPadding}
      >
        <h3 class="text-center">
          Point-of-sale systems & business software solutions
        </h3>
        <h1 class="text-4xl lg:text-6xl text-center">Technology</h1>
        <h1 class="text-4xl lg:text-6xl text-center mr-16">
          <span className="text-gray-400">that works</span> the
        </h1>
        <h1 class="text-4xl lg:text-6xl text-center ml-32">way you work</h1>
        <div className="flex flex-row">
          <div class="card rounded-none w-100 max-w-[100%]" style={twopic}>
            <img
              src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-left.6ac5cc0e.png&w=750&q=75"
              alt="/"
            />
          </div>
          <div class="card rounded-none w-100 max-w-[100%]">
            <img
              src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-center.e5b323b7.png&w=1200&q=75"
              alt="/"
            />
          </div>
          <div class="card rounded-none w-100 max-w-[100%]" style={twopic}>
            <img
              src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right.3b00087f.png&w=750&q=75"
              alt="/"
            />
          </div>
        </div>
      </div>

      <div className="px-8">
        <div className="py-12 text-xl font-medium">
          <h1>Trusted by local businesses everywhere</h1>
        </div>
        <div className="flex justify-center gap-8">
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgotham.1f2fb21c.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcote.f483a013.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fbungalow-kitchen.2ff0c922.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpappas-restaurants.219a6c99.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Floma-brewing.553b963a.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsingle-thread.0a3bb83f.png&w=128&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcurrito-logo.6a2483d5.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fplantpub.6a392f9c.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffigueroa-mountain.59bece76.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
          <img
            src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhot-little-biscuit-logo.4da68128.png&w=256&q=75"
            className="w-auto h-20"
            alt=""
          />
        </div>
        <hr class="h-px my-20 border-0 dark:bg-gray-300" />
        <div className="py-8">
          <p className="text-5xl font-medium">Made to flex with</p>
          <p className="text-gray-500 text-5xl my-2 font-medium">
            your business
          </p>
        </div>



        <div className="pb-16">
          <TogglePage />
        </div>


        <div className="py-16 flex flex-row justify-between top-0 right-0">
          <div>
            <p className="text-5xl font-medium">Hardware that fits</p>
            <p className="text-5xl my-2 font-medium">in any space</p>
          </div>
          <div className="text-start">
            <p className="text-lg text-gray-700">
              Your POS needs to work day in and day out.
            </p>
            <p className="text-lg text-gray-700">
              We've included the features and flexibility to
            </p>
            <p className="text-lg text-gray-700">
              make sure it does just that.
            </p>
          </div>
        </div>
        <div className="">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" w-auto h-auto flex items-center justify-center rounded-xl"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="pt-40 flex justify-center items-center flex-col h-auto relative">
        <h1 className="text-6xl font-medium py-2 absolute top-24 left-64">
          Working with
        </h1>
        <h1 className="text-6xl font-medium pb-8">
          you,<span className="underline underline-offset-8 decoration-sky-500"> for you</span>
        </h1>
        <div className="py-8 text-3xl container w-[60vw] h-[60vw] leading-relaxed">
          <h1>
            We’re here to help people who want to run their business on their
            own terms. Because if you’ve got the courage to strike out on your
            own, you ought to have the freedom to{" "}
            <span className="text-gray-500">do things the way you want.</span>
            Whether you need easy payment processing for your small business or
            a fully-integrated restaurant management system, we work with you to
            build software and payment technology tailored to{" "}
            <span className="text-gray-500">the way you do business.</span> We
            believe great tech and support from real people can make the
            difference between success and failure. And we actually give a damn{" "}
            <span className="text-gray-500">about helping you succeed.</span>
          </h1>
          <div className="py-8">
            <button className="bg-blue-600 text-sm px-6 py-4 text-white rounded-full hover:bg-blue-700 mb-4">
              Why SpotOn?
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 px-8 py-8 flex justify-between">
        <div>
          <div className="mt-16">
            <p className="text-5xl font-medium">What business</p>
            <p className="text-5xl my-2 font-medium">are you in?</p>
          </div>
          <div className="py-4">
            <p className="text-gray-500 font-medium">
              Let’s find the right point-of-sale system, software,
            </p>
            <p className="text-gray-500 font-medium">integrations for you.</p>
          </div>
        </div>
        <div className="text-start mr-32 mt-16">
          <p className="text-sm text-gray-700">My business type</p>

          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <div className="relative">
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <div className="flex items-center border-b border-blue-500">
              <select
                id="underline_select"
                className="block py-2.5 pr-10 w-full text-sm text-gray-500 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 dark:text-gray-400 dark:border-gray-700"
              >
                <option value="" disabled selected hidden>
                  Select a business type
                </option>
                <option className="text-black" value="">
                  Resturants
                </option>
                <option className="text-black" value="">
                  Retail & Shopping
                </option>
                <option className="text-black" value="">
                  Professional Services
                </option>
                <option className="text-black" value="">
                  Automotive
                </option>
                <option className="text-black" value="">
                  Health & beauty
                </option>
              </select>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="absolute left-64 text-gray-500 pointer-events-none"
              />
            </div>
          </div>
          <button className="bg-blue-600 text-sm px-6 py-4 text-white rounded-full hover:bg-blue-700 mt-8">
            See solutions
          </button>
        </div>
      </div>

      <div className="bg-black h-screen flex justify-center text-white flex-col space-y-2 text-left px-4">
        <div className="container px-6">
          <p className="text-5xl font-medium">Boost revenue, streamline</p>
          <p className="text-5xl font-medium">operations, and create</p>
          <p className="text-5xl font-medium">exceptional customer</p>
          <p className="text-5xl font-medium">experiences</p>
        </div>
        <div className="container px-6"></div>
      </div>

      <div className="px-8 pt-32 pb-16 flex flex-row justify-between top-0 right-0">
        <div>
          <p className="text-5xl font-medium">
            What's <span className="text-gray-500">your goal</span>?
          </p>
        </div>
        <div className="text-start">
          <p className="text-md text-gray-700">
            SpotOn offers your business a wide array of solutions so
          </p>
          <p className="text-md text-gray-700">
            you can customize your point-of-sale to your needs.
          </p>
        </div>
      </div>

      <div className="pb-16"><Data/></div>
     
      

      <div className="h-screen bg-black">
        <div className="flex flex-row justify-between text-white px-8">
          <div className="py-32">
            <h1 className="text-5xl font-medium">See how your business</h1>
            <h1 className="text-5xl font-medium">
              can <span className="text-gray-400">succeed with SpotOn</span>
            </h1>
          </div>

          <div className="py-32">
            <button className="bg-black px-8 py-4 mx-4 border border-white text-white rounded-full hover:bg-blue-600 hover:border-black">
              Login
            </button>
            <button className="bg-blue-600 px-8 py-4 text-white rounded-full hover:bg-blue-700">
              Get a demo
            </button>
          </div>
        </div>
        <hr class="h-px border-0 dark:bg-gray-300" />
        <div class="bg-black flex flex-row">
          <div class="py-8 container px-8 flex flex-col">
            <a href="#" class="text-white text-lg font-medium leading-8 py-4">
              Company
            </a>
            <a href="#" class="text-gray-400 text-base leading-8">
              Why SpotOn?
            </a>
            <a href="#" class="text-gray-400 text-base leading-8">
              Tools & Learning
            </a>
            <a href="#" class="text-gray-400 text-base leading-8">
              Success Stories
            </a>
            <a href="#" class="text-gray-400 text-base leading-8">
              Blog
            </a>
            <a href="#" class="text-gray-400 text-base leading-8">
              Careers
            </a>
            <a href="#" class="text-gray-400 text-base leading-8">
              Media
            </a>
          </div>

          <div class="py-8 container px-8 flex flex-col">
            <a
              href="#"
              className="text-white text-lg font-medium leading-8 py-4"
            >
              Restaurant
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Overview
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Casual dining
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Fine dining
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Fast casual
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Quick service
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Bar
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Brewery
            </a>
          </div>

          <div class="py-8 container px-8 flex flex-col">
            <a
              href="#"
              className="text-white text-lg font-medium leading-8 py-4"
            >
              Small Business
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Retail & Shopping
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Professional Services
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Automotive
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Health & Beauty
            </a>
          </div>

          <div class="py-8 container px-8 flex flex-col">
            <a
              href="#"
              className="text-white text-lg font-medium leading-8 py-4"
            >
              Online ordering & delivery
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Reservations & waitlist
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Experiences
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Point-of-sale
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Virtual terminal
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Handhelds
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Kitchen display system
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Labor & scheduling
            </a>
          </div>

          <div class="py-8 container px-8 flex flex-col">
            <a
              href="#"
              className="text-white text-lg font-medium leading-8 py-4"
            >
              Tip management
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Payroll
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Marketing & reviews
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Loyalty program
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Websites
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Gift cards
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Payment processing
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Capital loans
            </a>
            <a href="#" className="text-gray-400 text-base leading-8">
              Equipment financing
            </a>
          </div>
        </div>
        <hr class="h-px border-0 dark:bg-gray-300" />

        <div className="bg-black">
          <div className="py-16 container px-16 flex flex-row justify-between">
            <div className="flex flex-col">
              <img
                className="w-40"
                src="https://posphilly.com/wp-content/uploads/2022/12/cropped-SpotOn_Logo-removebg-preview11.png"
                alt="SpotOn"
              />
              <div className="">
                <h1 className="text-sm text-gray-400">
                  © SpotOn Transact, LLC. 2023. All Rights Reserved. SpotOn
                </h1>
                <h1 className="text-sm text-gray-400">
                  Transact, LLC. is a Registered Partner/ISO ofMerrick Bank,
                </h1>
                <h1 className="text-sm text-gray-400">
                  South Jordan, UT & Wells Fargo Bank,N.A., Concord, CA &
                </h1>
                <h1 className="text-sm text-gray-400">
                  Elavon Inc., Georgia [a wholly owned subsidiary of U.S.
                </h1>
                <h1 className="text-sm text-gray-400">
                  Bancorp, Minneapolis, MN].
                </h1>
              </div>
            </div>
            <div className="border border-gray-400 rounded-xl p-6">
              <div className="flex flex-row items-center justify-between">
                <div className="">
                  <h1 className="text-white text-base">Help Center</h1>
                  <h1 className="text-white text-base">24/7 resources</h1>
                </div>
                <div className="">
                  <img
                    className="w-16"
                    src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhelp.5440460f.png&w=64&q=75"
                    alt="SpotOn"
                  />
                </div>
              </div>
              <div className="py-4">
                <h1 className="text-white text-sm">
                  Please get in touch if you need one-to-one assistance
                </h1>
                <h1 className="text-white text-sm">
                  getting started with new products or have questions
                </h1>
                <h1 className="text-white text-sm">for our Sales team.</h1>
                <h1 className="text-white underline underline-offset-8 pt-8 cursor-pointer">
                  Help Center
                  <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
                </h1>
              </div>
            </div>
          </div>
          <hr class="h-px border-0 dark:bg-gray-300" />
          <footer className="text-gray-300 flex gap-16 justify-center p-12">
            <h1 className="hover:underline cursor-pointer">
              Terms & Conditions
            </h1>
            <h1 className="hover:underline cursor-pointer">Privacy Policy</h1>
            <h1 className="hover:underline cursor-pointer">
              GMB Terms & Conditions
            </h1>
            <h1 className="hover:underline cursor-pointer">Manage cookies</h1>
            <h1 className="hover:underline cursor-pointer">
              Accessibility Statement
            </h1>
            <div className="flex items-center">
              <h1 className="hover:underline cursor-pointer pr-2">English</h1>
              <img
                className="w-6"
                src="https://www.spoton.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flanguage.015012b7.png&w=32&q=75"
                alt="English"
              />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;