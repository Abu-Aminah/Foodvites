import React from "react";
import HeroImg from "../../assets/HeroImg.png";
import HeroBg from "../../assets/HeroBg.png"
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div
            className="grid grid-cols-1 sm:grid-cols-2
             gap-4 place-items-center min-h-[600px]"
          >
            {/* text content section */}
            <div
              className="space-y-7 text-dark order-2
             sm:order-1"
            >
              <h1 
              data-aos="fade-up"
              className="text-5xl">
                Fresh & Healthy Meal Plan
                <span className="text-secondary font-cursive  text-7xl">
                  Delivery
                </span>{" "}
                in Ibadan
              </h1>
              <p className="lg:pr-64"
              data-aos="fade-up"
              data-aos-delay="300">
                Delicious meal delivered to your doorstep From $132.95 per week
              </p>

              {/* button section  */}

              <div
              data-aos="fade-up"
              data-aos-delay="500">
                <PrimaryButton />
              </div>
            </div>
            {/* image section  */}
            <div 
            data-aos="zoom-in"
            data-aos-delay="300"
            className=" relative z-30 order-1 sm:order-2">
              <img
                src={HeroImg}
                alt=""
                className="w-full sm:scale-125 sm:translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
