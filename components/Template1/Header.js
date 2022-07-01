import React from "react";

const Header = () => {
  return (
    <section class="relative pb-12 bg-black overflow-hidden">
      <div class="relative w-2/3 ml-auto">
        <div class="absolute top-0 left-0 lg:mt-20 rounded-full h-20 md:h-160 w-80 md:w-160">
          <img
            class="object-contain transform scale-200"
            src="https://shuffle.dev/boldui-assets/elements/shadow-blue-full.svg"
            alt=""
          />
        </div>
        <div class="absolute top-1/2 right-0 -mr-64 mt-40 xl:mt-20 rounded-full h-20 lg:h-160 w-80 lg:w-160">
          <img
            class="object-contain transform scale-200"
            src="https://shuffle.dev/boldui-assets/elements/shadow-light-7.svg"
            alt=""
          />
        </div>
        <div class="absolute top-0 right-0 -mt-52 lg:-mt-0 -mr-64">
          <div class="transform rotate-45 clip-path md:-mt-20">
            <img
              class="mt-40 lg:mt-0 transform -rotate-45 h-full"
              src="https://shuffle.dev/boldui-assets/images/photo-women.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="relative container mx-auto px-4">
        <div class="flex flex-wrap py-24 xl:pb-52">
          <div class="w-full md:w-1/2 mb-6 md:mb-0 lg:mt-16">
            <div class="max-w-sm">
              <h2 class="mb-10 text-2xl sm:text-4xl md:text-5xl text-white uppercase font-heading">
                Take care of your performance every day
              </h2>
              <a
                class="inline-flex items-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
                href="#"
              >
                <svg
                  class="mr-3"
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                    fill="black"
                  ></path>
                </svg>
                <span class="text-sm uppercase font-heading">
                  Start for free
                </span>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="flex flex-wrap h-full">
              <div class="hidden md:block w-full">
                <div class="flex items-center justify-end">
                  <button class="inline-block w-3 h-3 mr-6 rounded-full bg-blue-500"></button>
                  <button class="inline-block w-3 h-3 mr-6 rounded-full bg-gray-300"></button>
                  <button class="inline-block w-3 h-3 mr-6 rounded-full bg-gray-300"></button>
                  <button class="inline-block w-3 h-3 rounded-full bg-gray-300"></button>
                </div>
              </div>
              <a
                class="mt-4 md:mt-0 flex md:ml-auto items-end text-white hover:underline"
                href="#"
              >
                <span class="mr-2 font-heading">Request a demo</span>
                <svg
                  class="mb-2"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
