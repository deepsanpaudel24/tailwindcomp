import React from "react";

const HowDoesItWork = () => {
  return (
    <section class="relative py-32 bg-black overflow-hidden">
      <img
        class="absolute z-10 top-0 md:top-1/2 left-0 mt-20 md:mt-0 transform md:-translate-y-1/2 -translate-x-1/2 w-32 md:w-52 lg:w-80 h-32 md:h-52 lg:h-80 rounded-full"
        src="https://shuffle.dev/boldui-assets/images/placeholder1.png"
        alt=""
      />
      <img
        class="absolute z-10 top-0 md:top-1/2 right-0 mt-20 md:mt-0 transform md:-translate-y-1/2 translate-x-1/2 w-32 md:w-52 lg:w-80 h-32 md:h-52 lg:h-80 rounded-full"
        src="https://shuffle.dev/boldui-assets/images/placeholder2.png"
        alt=""
      />
      <div class="relative container mx-auto px-4">
        <img
          class="absolute top-0 md:top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-mt-32"
          src="https://shuffle.dev/boldui-assets/elements/shadow-blue-full.svg"
          alt=""
        />
        <img
          class="absolute top-0 md:top-1/2 left-1/2 transform -translate-y-1/2 mr-64 w-full"
          src="https://shuffle.dev/boldui-assets/elements/shadow-light-7.svg"
          alt=""
        />
        <img
          class="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-52 lg:w-96 h-52 lg:h-96 rounded-full"
          src="https://shuffle.dev/boldui-assets/images/article1.jpeg"
          alt=""
        />
        <div class="relative flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-8 md:mb-52">
            <div class="max-w-xs mx-auto text-center">
              <div class="relative flex mx-auto mb-4 items-center justify-center h-32 w-32">
                <img
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://shuffle.dev/boldui-assets/elements/ellipse.svg"
                  alt=""
                />
                <span class="text-yellow-300">1</span>
              </div>
              <h3 class="mb-4 text-xl text-white font-heading">
                Security in saving
              </h3>
              <p class="text-gray-500">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4 mb-8 md:mb-52">
            <div class="max-w-xs mx-auto text-center">
              <div class="relative flex mx-auto mb-4 items-center justify-center h-32 w-32">
                <img
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://shuffle.dev/boldui-assets/elements/ellipse.svg"
                  alt=""
                />
                <span class="text-yellow-300">2</span>
              </div>
              <h3 class="mb-4 text-xl text-white font-heading">
                Change of access
              </h3>
              <p class="text-gray-500">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div class="max-w-xs mx-auto text-center">
              <div class="relative flex mx-auto mb-4 items-center justify-center h-32 w-32">
                <img
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://shuffle.dev/boldui-assets/elements/ellipse.svg"
                  alt=""
                />
                <span class="text-yellow-300">3</span>
              </div>
              <h3 class="mb-4 text-xl text-white font-heading">
                Frequent authentication
              </h3>
              <p class="text-gray-500">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <div class="max-w-xs mx-auto text-center">
              <div class="relative flex mx-auto mb-4 items-center justify-center h-32 w-32">
                <img
                  class="absolute top-0 left-0 w-full h-full"
                  src="https://shuffle.dev/boldui-assets/elements/ellipse.svg"
                  alt=""
                />
                <span class="text-yellow-300">4</span>
              </div>
              <h3 class="mb-4 text-xl text-white font-heading">
                List of regular users
              </h3>
              <p class="text-gray-500">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;
