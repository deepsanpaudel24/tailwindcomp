import React from "react";

const HowItWorks2 = () => {
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
          <div class="mb-10 flex flex-wrap">
            <div class="mb-10 lg:mb-0 w-full lg:w-1/2">
              <div class="max-w-md">
                <span class="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                  Build &amp; Launch without problems
                </h2>
                <p class="max-w-xs text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
              </div>
            </div>
            <div class="relative w-full lg:w-1/2">
              <img
                class="relative rounded-lg"
                src="https://images.unsplash.com/photo-1607556772227-fe3868023d27?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
              <button class="text-white hover:text-gray-50">
                <svg
                  class="absolute w-16 h-16"
                  style="top: 38%; left: 45%;"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <span class="mb-6 w-12 h-12 flex justify-center items-center bg-green-100 rounded text-green-600 font-bold">
                1
              </span>
              <h3 class="mb-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p class="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
            <div class="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <span class="mb-6 w-12 h-12 flex justify-center items-center bg-green-100 rounded text-green-600 font-bold">
                2
              </span>
              <h3 class="mb-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p class="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <span class="mb-6 w-12 h-12 flex justify-center items-center bg-green-100 rounded text-green-600 font-bold">
                3
              </span>
              <h3 class="mb-2 text-2xl font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p class="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
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

export default HowItWorks2;
