import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative  ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20 " />
      <Carousel
        // className="z-5"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="transition ease-in-out duration-3000"
      >
        <div className="">
          <img
            loading="lazy"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-collection-fashion-sale-facebook-shared-p-design-template-13f9340620c0320596e6f8e419e0dbdf_screen.jpg?ts=1635390891"
            alt=""
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/podium-market-red-design-template-66a2cedc11e1500cffff549845873e74_screen.jpg?ts=1640162202"
            alt=""
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/headset-ads-twitter-post-design-template-3d9fc07fbfb506e65d4c60822581fdcd_screen.jpg?ts=1628509953"
            alt=""
          />
        </div>
        <div className="">
          <img
            loading="lazy"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/super-mega-sale-podium-design-template-4fe0867b556d3101c61f95fb4144e36f_screen.jpg?ts=1639848365"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
