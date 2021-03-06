import React from "react";

const Faq1 = () => {
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
        <div class="border-b">
          <div class="mb-16 max-w-xl mx-auto px-4 text-center">
            <span class="text-purple-600 font-bold">
              Dolor sit amet consectutar
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          <div class="max-w-3xl mx-auto">
            <div class="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
              <button class="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-purple-600 border-b-2 border-purple-600">
                General
              </button>
              <button class="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition duration-150">
                Payments
              </button>
              <button class="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition duration-150">
                Returns
              </button>
              <button class="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition duration-150">
                Refunds
              </button>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <ul>
              <li class="py-12 pr-4 border-b">
                <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span class="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </span>
                  <svg
                    class="w-4 h-4 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                </button>
                <p class="mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat. Fusce in ligula
                  urna. Fusce eget nunc et libero accumsan rutrum quis nec
                  lectus. Quisque luctus sem nibh, quis ornare neque consectetur
                  varius. Maecenas rhoncus consectetur rutrum.
                </p>
              </li>
              <li class="py-6 lg:py-12 pr-4 border-b">
                <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span class="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    class="w-4 h-4 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p class="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li class="py-6 lg:py-12 pr-4 border-b">
                <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span class="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    class="w-4 h-4 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p class="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li class="py-6 lg:py-12 pr-4 border-b">
                <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span class="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    class="w-4 h-4 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p class="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li class="py-6 lg:py-12 pr-4 border-b">
                <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span class="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    class="w-4 h-4 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p class="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li class="py-6 lg:py-12 pr-4 border-b">
                <button class="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span class="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    class="w-4 h-4 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p class="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
            </ul>
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

export default Faq1;
