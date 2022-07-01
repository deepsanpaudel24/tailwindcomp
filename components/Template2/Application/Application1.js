import React from "react";

const Application1 = () => {
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
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-md">
                <span class="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 class="text-4xl lg:text-5xl font-bold font-heading">
                  Build &amp; Launch without problems
                </h2>
                <p class="mb-16 text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
                <div class="flex flex-wrap">
                  <div class="mb-8 w-full lg:w-1/2">
                    <h4 class="text-gray-500">Total Revenue</h4>
                    <span class="text-3xl lg:text-4xl font-bold">$33,261</span>
                  </div>
                  <div class="mb-8 w-full lg:w-1/2">
                    <h4 class="text-gray-500">Subscribers</h4>
                    <span class="text-3xl lg:text-4xl font-bold">481,095</span>
                  </div>
                  <div class="mb-8 w-full lg:w-1/2">
                    <h4 class="text-gray-500">Modal Sale Rate</h4>
                    <span class="text-3xl lg:text-4xl font-bold">25%</span>
                  </div>
                  <div class="mb-8 w-full lg:w-1/2">
                    <h4 class="text-gray-500">Conversations</h4>
                    <span class="text-3xl lg:text-4xl font-bold">643,533</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-center w-full lg:w-1/2 px-4">
              <button class="order-1 xl:order-0 mr-12 inline-block p-6 bg-white rounded-full shadow text-green-600 hover:text-green-400 focus:outline-none">
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
              <div class="w-full xl:w-auto order-0 xl:order-1">
                <img
                  class="mx-auto mb-8 xl:mb-0"
                  src="atis-assets/illustrations/book-detail-full.png"
                  alt=""
                />
              </div>
              <button class="order-2 xl:order-2 ml-12 inline-block p-6 bg-white rounded-full shadow text-green-600 hover:text-green-400 focus:outline-none">
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

export default Application1;
