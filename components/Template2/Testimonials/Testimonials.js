import React from "react";

const Testimonials = () => {
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
      <div class="py-20 bg-gray-50 radius-for-skewed overflow-hidden">
        <div class="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
          <div class="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
            <div class="w-full lg:w-4/5 mb-4 lg:mb-0">
              <span class="text-purple-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 class="text-4xl lg:text-5xl font-bold">Testimonials</h2>
            </div>
            <div class="w-full lg:w-1/5">
              <button class="mr-4 bg-white p-5 rounded-full shadow-md text-purple-600 hover:text-purple-700 transition duration-200">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </button>
              <button class="bg-white p-5 rounded-full shadow-md text-purple-600 hover:text-purple-700 transition duration-200">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="relative flex">
          <div class="hidden lg:block absolute top-0 left-0 lg:w-1/3 px-3 -ml-80 opacity-25">
            <div class="p-8 bg-white rounded shadow text-center">
              <div
                class="bg-no-repeat bg-left-top"
                style="background-image: url('atis-assets/elements/quote-grey.svg');"
              >
                <p class="mb-8 text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <img
                  class="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                  alt=""
                />
                <h4 class="mb-1 text-2xl font-bold font-heading">
                  Alice Bradley
                </h4>
                <p class="text-gray-500">Backend Developer</p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap max-w-6xl px-2 mx-auto">
            <div class="mb-4 w-full lg:w-1/3 px-3">
              <div class="p-8 bg-white rounded shadow text-center">
                <div
                  class="bg-no-repeat bg-left-top"
                  style="background-image: url('atis-assets/elements/quote-grey.svg');"
                >
                  <p class="mb-8 text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque et placerat metus. Morbi aliquet felis sit amet
                    erat finibus, ac condimentum ligula ornare.
                  </p>
                  <img
                    class="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                    alt=""
                  />
                  <h4 class="mb-1 text-2xl font-bold font-heading">
                    Alice Bradley
                  </h4>
                  <p class="text-gray-500">Backend Developer</p>
                </div>
              </div>
            </div>
            <div class="mb-4 w-full lg:w-1/3 px-3">
              <div class="p-8 bg-white rounded shadow text-center">
                <div
                  class="bg-no-repeat bg-left-top"
                  style="background-image: url('atis-assets/elements/quote-grey.svg');"
                >
                  <p class="mb-8 text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque et placerat metus. Morbi aliquet felis sit amet
                    erat finibus, ac condimentum ligula ornare.
                  </p>
                  <img
                    class="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                  <h4 class="mb-1 text-2xl font-bold font-heading">
                    Dennis Robertson
                  </h4>
                  <p class="text-gray-500">Frontend Developer</p>
                </div>
              </div>
            </div>
            <div class="mb-4 w-full lg:w-1/3 px-3">
              <div class="p-8 bg-white rounded shadow text-center">
                <div
                  class="bg-no-repeat bg-left-top"
                  style="background-image: url('atis-assets/elements/quote-grey.svg');"
                >
                  <p class="mb-8 text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque et placerat metus. Morbi aliquet felis sit amet
                    erat finibus, ac condimentum ligula ornare.
                  </p>
                  <img
                    class="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                    alt=""
                  />
                  <h4 class="mb-1 text-2xl font-bold font-heading">
                    Daisy Carter
                  </h4>
                  <p class="text-gray-500">Product Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block absolute top-0 right-0 lg:w-1/3 px-3 -mr-80 opacity-25">
            <div class="p-8 bg-white rounded shadow text-center">
              <div
                class="bg-no-repeat bg-left-top"
                style="background-image: url('atis-assets/elements/quote-grey.svg');"
              >
                <p class="mb-8 text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque et placerat metus. Morbi aliquet felis sit amet
                  erat finibus, ac condimentum ligula ornare.
                </p>
                <img
                  class="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                  alt=""
                />
                <h4 class="mb-1 text-2xl font-bold font-heading">
                  Alice Bradley
                </h4>
                <p class="text-gray-500">Backend Developer</p>
              </div>
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

export default Testimonials;
