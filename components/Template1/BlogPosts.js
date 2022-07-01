import React from "react";

const BlogPosts = () => {
  return (
    <section class="pb-24 bg-black overflow-hidden">
      <div class="flex flex-wrap">
        <div class="w-full">
          <div
            class="h-full py-32 md:py-52 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://shuffle.dev/boldui-assets/images/men4-light.png')`,
            }}
          >
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap items-center justify-between">
                <div class="max-w-xl mb-6 lg:mb-0">
                  <span class="font-semibold text-xs text-blue-500">
                    10 jun 2021 | 19:40
                  </span>
                  <h2 class="mt-2 text-2xl text-white font-heading">
                    Take quick action that increases your brand's regular
                    profit.
                  </h2>
                </div>
                <a
                  class="inline-flex w-full md:w-auto items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
                  href="#"
                >
                  <svg
                    class="text-black mr-3"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="text-sm font-medium font-heading">
                    Read article
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 mb-24 lg:mb-0">
          <a class="block group" href="#">
            <img
              class="h-80 md:h-112 w-full object-cover"
              src="https://shuffle.dev/boldui-assets/images/men2.png"
              alt=""
            />
            <div class="relative -mt-20 px-10">
              <img
                class="absolute top-0 left-0 transform -mt-12 h-64"
                src="https://shuffle.dev/boldui-assets/elements/ellipse-dark.svg"
                alt=""
              />
              <div class="relative">
                <div class="max-w-xs mb-5">
                  <span class="font-semibold text-xs text-blue-500">
                    10 jun 2021 | 19:40
                  </span>
                  <h3 class="text-2xl text-white font-heading group-hover:underline">
                    Quick problem solving contact
                  </h3>
                </div>
                <p class="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full lg:w-1/3 mb-24 lg:mb-0">
          <a class="block group" href="#">
            <img
              class="h-80 md:h-112 w-full object-cover"
              src="https://shuffle.dev/boldui-assets/images/photo-women.png"
              alt=""
            />
            <div class="relative -mt-20 px-10">
              <img
                class="absolute top-0 left-0 transform -mt-12 h-64"
                src="https://shuffle.dev/boldui-assets/elements/ellipse-dark.svg"
                alt=""
              />
              <div class="relative">
                <div class="max-w-xs mb-5">
                  <span class="font-semibold text-xs text-blue-500">
                    10 jun 2021 | 19:40
                  </span>
                  <h3 class="text-2xl text-white font-heading group-hover:underline">
                    Donec nec cursus nulla, quis aliquet ipsum
                  </h3>
                </div>
                <p class="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full lg:w-1/3">
          <a class="block group" href="#">
            <img
              class="h-80 md:h-112 w-full object-cover"
              src="boldui-assets/images/men2.png"
              alt=""
            />
            <div class="relative -mt-20 px-10">
              <img
                class="absolute top-0 left-0 transform -mt-12 h-64"
                src="https://shuffle.dev/boldui-assets/elements/ellipse-dark.svg"
                alt=""
              />
              <div class="relative">
                <div class="max-w-xs mb-5">
                  <span class="font-semibold text-xs text-blue-500">
                    10 jun 2021 | 19:40
                  </span>
                  <h3 class="text-2xl text-white font-heading group-hover:underline">
                    In suscipit tellus convallis scelerisque
                  </h3>
                </div>
                <p class="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
