import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div data-aos="fade-down"
          className="container bg-gradient-to-b from-primary
         to-primaryDark rounded-t-3xl"
        >
          {/* heading section  */}

          <h1
            className="py-10 text-3xl font-bold text-yellow-50
             text-center"
          >
            Contact Us
          </h1>

          {/* grid section  */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2
                 md:grid-cols-3 gap-14 border-b-2 border-white pb-6"
          >
            {/* address section  */}
            <div className=" text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                C2/9, Olalere Avenue, New Airport Road, <br />
                Alakia, Ibadan, Oyo State, Nigeria.
              </p>
            </div>

            {/* email section  */}

            <div className=" text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <p>livedreamcreates@gmail.com</p>
              <p>abuolabamisebi@gmail.com</p>
            </div>
            {/* Number section  */}
            <div className=" text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div className="md:text-sm lg:text-lg">
                <p>+2347063520525 - Sales and Services</p>
                <p>+2348117001676- Hiring Queries</p>
                <p>2347038195736 - WhatsApp</p>
              </div>
            </div>
          </div>

          {/* copyright footer section */}

          <div className="flex justify-between p-4 items-center">
            <p>&copy; 2024 FoodVities. All rights reserved.</p>
            <div className="flex items-center gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
