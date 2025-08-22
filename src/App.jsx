import React from "react";
import Header from "./components/Header";
import GelatoCard from "./components/GelatoCard";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <section className="bg-[url(/hero-bg.jpg)] bg-no-repeat bg-cover py-[100px] bg-center max-h-[846px] max-lg:bg-[#61298c] max-lg:bg-none max-sm:py-20">
          <div className="max-w-[1440px] mx-auto px-16 max-xl:px-14 max-sm:px-6 max-md:px-10 max-lg:px-12">
            <h1 className="font-[Berkshire_Swash] text-8xl text-white mb-6 leading-[108px] max-w-[690px] max-xl:text-7xl max-sm:text-5xl max-sm:leading-16 ">
              Vegan Ice Cream Delights
            </h1>
            <p className="font-[Archivo] text-xl text-white mb-11 max-w-[640px] max-sm:text-lg">
              Discover a world of tasty vegan ice cream flavors and desserts
              that everyone can enjoy.
            </p>
            <Button content="Explore Our Vegan Flavors" color="F83D8E" />
          </div>
        </section>
        <section className="bg-[url(/feature-bg.png)] bg-no-repeat bg-cover bg-center max-xl:bg-white max-xl:bg-none">
          <div className="py-23 max-w-[1440px] mx-auto px-16 flex gap-18 items-center justify-center max-xl:px-14 max-sm:px-6 max-md:px-10 max-lg:px-12 max-sm:py-20 max-xl:flex-col-reverse">
            <img
              className="max-h-[520px]"
              src="./feature-image.png"
              alt="ice cream"
            />
            <div className="flex flex-col max-xl:items-center max-xl:text-center max-sm:[&>p]:text-lg">
              <h2 className="mb-9 text-[#0F0200] font-[Berkshire_Swash] text-6xl leading-16 max-w-[384px] max-xl:max-w-full max-sm:text-5xl max-sm:leading-16">
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
        <section className="max-xl:px-14 max-sm:px-6 max-md:px-10 max-lg:px-12 relative flex flex-col gap-[50px] items-center py-[136px] max-xl:py-[100px] max-sm:py-20 bg-linear-[-30deg] from-[#EFD7EF] via-[#F5F9FC] via-[#F8EAE1] to-[#EAF8F9]">
          <img
            src="./classic-left.png"
            className="absolute left-0 max-h-[300px] max-xl:hidden"
          ></img>
          <img
            src="./classic-right.png"
            className="absolute right-0 bottom-[90px] max-h-[400px] max-xl:hidden"
          ></img>
          <div className="flex gap-4.5 flex-col items-center max-xl:items-center max-xl:text-center max-sm:[&>p]:text-lg">
            <h2 className="text-[#0F0200] text-6xl font-[Berkshire_Swash] max-sm:text-5xl max-sm:leading-16">
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
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
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
        <section className="relative flex flex-col gap-[50px] items-center py-[136px] bg-linear-[-30deg] from-[#EFD7EF] via-[#F5F9FC] via-[#F8EAE1] to-[#EAF8F9]">
          <div className="flex gap-4.5 flex-col items-center">
            <h2 className="text-[#0F0200] text-6xl font-[Berkshire_Swash]">
              Most Popular <span className="text-[#F83D8E]">Gelato</span>{" "}
              Flavors
            </h2>
            <p className="font-[Archivo] text-[#646464] text-xl">
              Discover the gelato flavors that our customers love the most.
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
                <GelatoCard
                  productName="Straberry Balsamic Gelato"
                  productPrice={6.49}
                  rating={4.9}
                  img="gelato-1.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GelatoCard
                  productName="Chocolate Hazelnut Gelato"
                  productPrice={6.79}
                  rating={4.2}
                  img="gelato-2.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GelatoCard
                  productName="Tiramisu Gelato"
                  productPrice={7.49}
                  rating={4.9}
                  img="gelato-3.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GelatoCard
                  productName="Classic Pistachio Gelato"
                  productPrice={6.29}
                  rating={4.8}
                  img="gelato-4.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GelatoCard
                  productName="Straberry Balsamic Gelato"
                  productPrice={6.49}
                  rating={4.9}
                  img="gelato-1.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GelatoCard
                  productName="Chocolate Hazelnut Gelato"
                  productPrice={6.79}
                  rating={4.2}
                  img="gelato-2.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GelatoCard
                  productName="Tiramisu Gelato"
                  productPrice={7.49}
                  rating={4.9}
                  img="gelato-3.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <GelatoCard
                  productName="Classic Pistachio Gelato"
                  productPrice={6.29}
                  rating={4.8}
                  img="gelato-4.png"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="bg-[url(/cta-bg.png)] bg-no-repeat bg-auto  bg-center">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-14 px-16 py-36   items-center">
            <div className="flex gap-7 flex-col items-center ">
              <h2 className="text-[#0F0200] text-6xl font-[Berkshire_Swash] leading-16 text-center max-w-[750px]">
                Sign up For{" "}
                <span className="text-[#F83D8E]">Exclusive Deals</span> and
                Updates
              </h2>
              <p className="font-[Archivo] text-[#646464] text-xl">
                Get 10% off your next order and stay updated with our latest
                offers.
              </p>
            </div>
            <form action="#" className="flex items-center flex-col gap-9">
              <div className="flex shadow-lg rounded-[30px]">
                <input
                  className="w-[520px] px-5 outline-none"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <Button content="Subscribe" color="F83D8E" />
              </div>

              <label
                htmlFor="privacy"
                className="text-[#646464] font-[Archivo] flex text-sm gap-2.5 items-center"
              >
                <input
                  type="checkbox"
                  name="privacy"
                  className="w-5 h-5 rounded-full bg-[#E8E8E8] appearance-none checked:bg-[#F83D8E] cursor-pointer"
                  id="privacy"
                />
                <p>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[#F83D8E] underline font-[Archivo] text-sm"
                  >
                    Privacy Policy
                  </a>
                </p>
              </label>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
