import React from "react";

export const CallToAction1 = () => {
  return (
    <section class="py-20 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-center -mx-4">
          <div class="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
            <a
              class="mb-6 inline-block text-white text-3xl font-bold leading-none"
              href="#"
            >
              <img
                class="h-12"
                src="atis-assets/logo/atis/atis-color-sign.svg"
                alt=""
                width="auto"
              />
            </a>
            <h2 class="mb-4 text-4xl md:text-5xl text-white font-bold font-heading">
              So much more than a business analytics tool
            </h2>
            <p class="mb-8 text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <a
              class="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl"
              href="#"
            >
              Get Started
            </a>
          </div>
          <div class="w-full lg:w-1/2 px-4">
            <div class="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div class="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                <form>
                  <div class="mb-6">
                    <span class="text-sm text-gray-400">Sign Up</span>
                    <h4 class="text-2xl">Create an account</h4>
                  </div>
                  <div class="mb-4 flex flex-wrap -mx-2">
                    <div class="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                      <input
                        class="py-3 px-3 w-full bg-white border rounded"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="w-full lg:w-1/2 px-2">
                      <input
                        class="py-3 px-3 w-full bg-white border rounded"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <input
                    class="mb-4 py-3 px-3 w-full bg-white border rounded"
                    type="email"
                    placeholder="hello@example.com"
                  />
                  <input
                    class="mb-6 py-3 px-3 w-full bg-white border rounded"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button class="mb-4 py-4 w-full rounded text-sm bg-pink-600 hover:bg-pink-700 text-white font-bold leading-normal transition duration-250">
                    Sign Up
                  </button>
                </form>
                <p class="text-xs text-gray-400">
                  <span>Already have an account?</span>
                  <a class="text-pink-600" href="#">
                    Sign In
                  </a>
                </p>
              </div>
              <p class="text-center text-gray-400">
                <a class="text-white hover:text-gray-200" href="#">
                  Police privacy
                </a>
                <span>and</span>
                <a class="text-white hover:text-gray-200" href="#">
                  Terms of Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
