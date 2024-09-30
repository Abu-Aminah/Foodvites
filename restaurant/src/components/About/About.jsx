import React from "react";
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";
import { FaUser } from "react-icons/fa";

const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};
const About = ({HandlePopup}) => {
  return (
    <>
      <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1 data-aos="fade"
            className="pt-20 tracking-wider text-4xl
         font-semibold text-white text-center"
          >
            About Us
          </h1>

          {/* card section  */}

          <div data-aos="fade"
          data-aos-delay="300"
           className="bg-white/80 p-10  my-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            perferendis odit adipisci vero alias nihil. Sunt expedita excepturi
            harum beatae adipisci non quos asperiores laudantium nemo obcaecati
            qui suscipit neque officia nesciunt accusantium corporis assumenda,
            minima quod minus soluta itaque. Esse iure, asperiores quidem,
            officiis quod soluta odio obcaecati aspernatur incidunt dolore quia
            ad sit, ducimus corrupti maiores ea qui! Facilis, ipsa. Veritatis
            impedit maxime harum fuga optio pariatur praesentium. Odit commodi
            dignissimos, quidem aliquid magni ducimus cupiditate laboriosam
            eligendi cumque illum at totam vero veniam consequuntur! Maiores,
            amet pariatur omnis commodi, ex perferendis vero quibusdam nulla
            facere quae inventore!

            <div className="pt-10 flex justify-center">
            <button className="flex justify-center gap-2
                 bg-primary text-white px-5 py-2 text-xl
                  h-[40px] duration-300 hover:scale-105"
                  onClick={HandlePopup}>
                    <FaUser />
                    My Account
                </button>
            </div>
          </div>
        </div>

        {/* wave vector  */}
        <div className="absolute top-0 right-0 w-full">
            <img src={Vector} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
