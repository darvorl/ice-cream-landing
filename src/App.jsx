import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Card from "./components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

const App = () => {
  return (
    <main>
      <Header />
      <section className="bg-[url(/hero-bg.jpg)] bg-no-repeat bg-cover py-[100px] bg-center max-h-[846px]">
        <div className="max-w-[1440px] mx-auto px-16">
          <h1 className="font-[Berkshire_Swash] text-8xl text-white mb-6 leading-[108px] max-w-[690px]">
            Vegan Ice Cream Delights
          </h1>
          <p className="font-[Archivo] text-xl text-white mb-11 max-w-[640px]">
            Discover a world of tasty vegan ice cream flavors and desserts that
            everyone can enjoy.
          </p>
          <Button content="Explore Our Vegan Flavors" color="F83D8E" />
        </div>
      </section>
      <section className="bg-[url(/feature-bg.png)] bg-no-repeat bg-cover bg-center max-w-[1440px] mx-auto">
        <div className="py-23 max-w-[1440px] mx-auto px-16 flex gap-18 items-center justify-center">
          <img
            className="max-h-[520px]"
            src="./feature-image.png"
            alt="ice cream"
          />
          <div className="">
            <h2 className="mb-9 text-[#0F0200] font-[Berkshire_Swash] text-6xl leading-16 max-w-[384px]">
              Experience the Art of{" "}
              <span className="text-[#F83D8E]">Gelato</span>
            </h2>
            <p className="font-[Archivo] text-[#646464] text-xl mb-5">
              Handcrafted Flavors with Fresh, Local Ingredients.
            </p>
            <p className="font-[Archivo] text-[#646464] text-xl mb-11 max-w-[434px]">
              Enjoy gelato made with the finest ingredients and traditional
              techniques.
            </p>
            <Button content="See Our Gelato Menu" color="F83D8E" />
          </div>
        </div>
      </section>
      <section className="relative flex flex-col gap-[50px] items-center py-[136px] bg-linear-[-30deg] from-[#EFD7EF] via-[#F5F9FC] via-[#F8EAE1] to-[#EAF8F9]">
        <img
          src="./classic-left.png"
          className="absolute left-0 max-h-[300px]"
        ></img>
        <img
          src="./classic-right.png"
          className="absolute right-0 bottom-[90px] max-h-[400px]"
        ></img>
        <div className="flex gap-4.5 flex-col items-center">
          <h2 className="text-[#0F0200] text-6xl font-[Berkshire_Swash]">
            Our <span className="text-[#F83D8E]">Classic</span> Favorites
          </h2>
          <p className="font-[Archivo] text-[#646464] text-xl">
            Check out our top products that our customers love
          </p>
        </div>
        <div className="w-full max-w-[1140px]">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={5.49}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={4.9}
                color="F7F2F7"
                img="card-1-product.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={8.49}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={4.5}
                color="FFEEEE"
                img="card-2-product.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={12.49}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={3.9}
                color="F6F9E1"
                img="card-3-product.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={7.99}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={4.3}
                color="FFFAF4"
                img="card-4-product.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={5.49}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={4.9}
                color="F7F2F7"
                img="card-1-product.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={8.49}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={4.5}
                color="FFEEEE"
                img="card-2-product.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={12.49}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={3.9}
                color="F6F9E1"
                img="card-3-product.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                productName="Chocolate Brownie Sundae"
                productPrice={7.99}
                productDescription="Rich chocolate ice cream with
chunks of brownie."
                rating={4.3}
                color="FFFAF4"
                img="card-4-product.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="bg-[url(/gelato-bg.jpg)] bg-no-repeat bg-cover py-[100px] bg-center max-h-[720px]">
        <div className="max-w-[1440px] mx-auto px-16">
          <h2 className="text-white font-[Berkshire_Swash] mb-8 text-8xl max-w-[680px] leading-[116px]">
            Gelato Lovers' Special!
          </h2>
          <p className="text-white text-3xl mb-10 font-[Archivo]">
            Buy Any Two Gelatos Pints, Get One{" "}
            <span className="text-[#FFD800]">Free!</span>
          </p>
          <Button content="Claim Offer" color="F83D8E" />
        </div>
      </section>
    </main>
  );
};

export default App;
