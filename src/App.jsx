import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";

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
      <section className="bg-[url(/feature-bg.png)] bg-no-repeat bg-cover bg-center">
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
    </main>
  );
};

export default App;
