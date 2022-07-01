import React from "react";

const Team = () => {
  return (
    <section class="py-24 bg-black overflow-hidden">
      <div class="relative container mx-auto px-4">
        <img
          class="absolute top-0 left-1/2 -mt-12 md:mt-64 lg:mt-0 transform -translate-x-1/2 scale-125"
          src="boldui-assets/elements/shadow-team-light-blue.svg"
          alt=""
        />
        <div class="relative max-w-xl mx-auto text-center mb-12">
          <span class="text-lg font-semibold text-blue-400">Lorem ipsum</span>
          <h2 class="mt-6 text-2xl text-white uppercase font-heading">
            Take quick action that increases your brand's regular profit.
          </h2>
        </div>
        <div class="relative flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
            <div class="flex justify-center">
              <div>
                <img
                  class="h-80"
                  src="https://shuffle.dev/boldui-assets/images/team1.png"
                  alt=""
                />
                <div class="-mt-10">
                  <h3 class="text-lg text-white font-heading mb-2">
                    Kathy Ramsey
                  </h3>
                  <p class="text-sm text-gray-500 uppercase font-semibold tracking-widest">
                    CEO &amp; Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
            <div class="flex justify-center">
              <div>
                <img
                  class="h-80"
                  src="https://shuffle.dev/boldui-assets/images/team1.png"
                  alt=""
                />
                <div class="-mt-10">
                  <h3 class="text-lg text-white font-heading mb-2">
                    Peter Dimebag
                  </h3>
                  <p class="text-sm text-gray-500 uppercase font-semibold tracking-widest">
                    General director
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
            <div class="flex justify-center">
              <div>
                <img
                  class="h-80"
                  src="https://shuffle.dev/boldui-assets/images/team1.png"
                  alt=""
                />
                <div class="-mt-10">
                  <h3 class="text-lg text-white font-heading mb-2">
                    Tom Clarks
                  </h3>
                  <p class="text-sm text-gray-500 uppercase font-semibold tracking-widest">
                    Product Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
