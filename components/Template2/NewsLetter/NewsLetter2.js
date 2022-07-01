import React from "react";

const NewsLetter2 = () => {
  return (
    <section>
      <div class="skew skew-top mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-20 bg-gray-900 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="mb-4 w-full lg:w-auto lg:mr-8 text-center">
              <div class="flex justify-center items-center p-5 mx-auto w-16 h-16 bg-gray-800 rounded">
                <img
                  class="h-8"
                  src="https://shuffle.dev/logo/atis/atis-mono-sign.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="mb-6 w-full lg:w-auto max-w-lg mx-auto lg:ml-0 mr-auto text-center lg:text-left">
              <h2 class="text-white text-4xl font-bold font-heading">
                Stay updated with our tool
              </h2>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="w-full lg:w-2/5">
              <form action="">
                <div class="max-w-md lg:max-w-sm mx-auto flex flex-wrap items-center">
                  <input
                    class="flex-grow py-3 px-4 mr-4 text-xs rounded leading-loose"
                    type="email"
                    placeholder="example@shuffle.dev"
                  />
                  <button class="flex-none py-2 px-6 rounded-t-xl rounded-l-xl bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-200">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
};

export default NewsLetter2;
