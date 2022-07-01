import React from "react";

const NewsLetter1 = () => {
  return (
    <section>
      <div class="skew skew-top mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-20 bg-gray-50 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="max-w-xl mx-auto text-center">
            <a
              class="mb-6 inline-block text-3xl font-bold leading-none"
              href="#"
            >
              <img
                class="h-12"
                src="atis-assets/logo/atis/atis-mono-sign.svg"
                alt=""
                width="auto"
              />
            </a>
            <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">
              So much more than a business analytics tool
            </h2>
            <p class="mb-8 text-gray-400 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <form class="mx-auto" action="">
              <div class="max-w-md mx-auto flex flex-wrap items-center">
                <input
                  class="flex-grow py-3 px-4 mr-4 text-xs rounded leading-loose"
                  type="email"
                  placeholder="example@shuffle.dev"
                />
                <button class="w-auto py-2 px-6 rounded-t-xl rounded-l-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
};

export default NewsLetter1;
