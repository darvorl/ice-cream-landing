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
    </main>
  );
};

export default App;
