import React from "react";
import apple from "../../assets/png/apple.png";
import kiwi from "../../assets/png/kiwi.png";
import lemon from "../../assets/png/lemon.png";
import leaf from "../../assets/png/leaf.png";
import tomato from "../../assets/png/tomato.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div>
        <div className="container py-14 relative">
          <h1 data-aos="fade-up"
              data-aos-delay="300"
            className=" py-8 tracking-wider text-2xl
         font-semibold text-dark text-center"
          >
            Taste the Healthy difference
          </h1>

          {/*text content section  */}
          <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className=" space-y-10">
            <div 
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              
              <div>
                <p>
                  We know <span className="text-primary">time</span> is the
                  greatest value in the modern world. Our healthy meal plan
                  delivery service Good Food in Ibadan is the answer for those
                  who want to eat healthy, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>
              <div></div>
            </div>
            <div
            data-aos="fade-up"
            data-aos-delay="300"
              className="grid grid-cols-1 
            sm:grid-cols-2 gap-4 py-10"
            >
              <div></div>
              <div>
                <p>
                  We know <span className="text-primary">time</span> is the
                  greatest value in the modern world. Our healthy meal plan
                  delivery service Good Food in Ibadan is the answer for those
                  who want to eat healthy, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>

              {/* button section  */}
              <div data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="0"
              className="flex justify-center mt-10 sm:mt-14">
                <PrimaryButton />
              </div>
            </div>

            {/* bg fruits pngs */}

            <div data-aos="fade-right"
              className="absolute top-5  left-16
             sm:bottom-0 sm:left-0 opacity-50
             sm:opacity-100"
            >
              <img data-aos="fade-right"
              src={leaf} alt="" className="max-w-[160px]" />
            </div>
            <div data-aos="fade-right"
              className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0
             opacity-50 sm:opacity-100"
            >
              <img src={tomato} alt="" className="max-w-[280px] " />
            </div>
            <div data-aos="fade-left"
              className="absolute top-10 right-16 sm:right-20
             opacity-50 sm:opacity-100"
            >
              <img src={lemon} alt="" className="max-w-[200px] " />
            </div>
            <div data-aos="fade-left"
              className="absolute hidden bottom-0 right-0 sm:block       opacity-50 sm:opacity-100"
            >
              <img src={apple} alt="" className="max-w-[200px] " />
            </div>
            <div data-aos="fade"
              className="absolute top-1/2 -translate-y-1/2 left-1/3
              translate-x-1/2 opacity-50 sm:opacity-100"
            >
              <img src={kiwi} alt="" className="max-w-[180px] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
