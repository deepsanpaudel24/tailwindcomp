import React from "react";

const ContactUs = () => {
  return (
    <section class="relative py-32 bg-black overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="w-full md:w-2/3 lg:w-1/2 mb-12 md:mb-0">
          <div class="max-w-md">
            <h2 class="mb-4 text-2xl text-white uppercase font-heading">
              Get questions?
            </h2>
            <p class="mb-8 text-lg text-gray-500">
              Take a big step forward in growing your business with this great
              tool.
            </p>
            <div>
              <input
                class="w-full mb-4 py-4 px-6 bg-yellow-900 rounded-full border text-white font-bold outline-none placeholder-white"
                type="email"
                placeholder="Type your e-mail"
              />
              <input
                class="w-full mb-6 py-4 px-6 bg-yellow-900 rounded-full border text-white font-bold outline-none placeholder-white"
                type="password"
                placeholder="Enter password"
              />
              <textarea
                class="w-full h-40 mb-6 py-4 px-6 bg-yellow-900 rounded-3xl border text-white font-bold resize-none outline-none placeholder-white"
                placeholder="Your message..."
              ></textarea>
              <label class="block mb-6" for="">
                <input type="checkbox" />
                <span class="text-sm text-white">
                  <span>By signing up, you agree to our</span>
                  <a class="text-blue-200 hover:underline" href="#">
                    Terms, Data Policy and Cookies Policy.
                  </a>
                </span>
              </label>
              <a
                class="inline-flex items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
                <span class="text-sm font-heading">Send your message</span>
              </a>
            </div>
          </div>
        </div>
        <div class="lg:hidden relative mt-8 py-10 px-8 md:px-16 bg-black border overflow-hidden">
          <img
            class="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2 ml-20 mt-12 scale-125 object-contain"
            src="boldui-assets/elements/shadow-blue-full.svg"
            alt=""
          />
          <div class="relative">
            <h3 class="mb-1 text-sm text-gray-500 font-semibold uppercase tracking-widest">
              Address
            </h3>
            <p class="text-lg text-white">1686 Geraldine Lane</p>
            <p class="mb-8 text-lg text-white">New York, NY 10013</p>
            <h3 class="mb-1 text-sm text-gray-500 font-semibold uppercase tracking-widest">
              Contacts
            </h3>
            <a
              class="inline-block text-lg text-white"
              href="mailto:hello@shuffle.dev"
            >
              hello@shuffle.dev
            </a>
            <p class="text-lg text-white">+7 843 672 431</p>
          </div>
        </div>
        <img
          class="md:hidden h-96 w-full object-cover"
          src="https://shuffle.dev/boldui-assets/images/map3.png"
          alt=""
        />
      </div>
      <div class="hidden lg:block absolute z-10 top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2">
        <div class="relative py-10 px-16 bg-black border overflow-hidden">
          <img
            class="absolute top-0 left-0 md:transform -translate-y-1/2 -translate-x-1/2 ml-20 mt-12 scale-125 object-contain"
            src="boldui-assets/elements/shadow-blue-full.svg"
            alt=""
          />
          <div class="relative">
            <h3 class="mb-1 text-sm text-gray-500 font-semibold uppercase tracking-widest">
              Address
            </h3>
            <p class="text-lg text-white">1686 Geraldine Lane</p>
            <p class="mb-8 text-lg text-white">New York, NY 10013</p>
            <h3 class="mb-1 text-sm text-gray-500 font-semibold uppercase tracking-widest">
              Contacts
            </h3>
            <p class="text-lg text-white">hello@shuffle.dev</p>
            <p class="text-lg text-white">+7 843 672 431</p>
          </div>
        </div>
      </div>
      <div class="hidden md:block absolute top-0 right-0 md:w-1/3 lg:w-1/2 h-full border-l">
        <div class="absolute bottom-1/2 right-0 mr-24">
          <svg
            width="28"
            height="34"
            viewBox="0 0 28 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.03923 4.57237C9.07209 -0.846668 17.6109 -1.22099 23.112 3.73641C28.6139 8.69417 28.9928 17.1063 23.9607 22.5254L13.9996 33.25L4.03923 22.5254C-0.679745 17.4434 -0.679745 9.65359 4.03923 4.57237ZM6.43178 20.3693L13.9996 28.518L21.5678 20.3693C25.3913 16.2518 25.1032 9.86079 20.9229 6.09326C16.7431 2.3261 10.2553 2.61131 6.43178 6.72774C2.84514 10.5887 2.84514 16.5076 6.43178 20.3693ZM16.9639 13.5482C16.9639 11.9356 15.6365 10.628 13.9996 10.628C12.3627 10.628 11.0345 11.9356 11.0345 13.5482C11.0345 15.1614 12.3627 16.469 13.9996 16.469C15.6365 16.469 16.9639 15.1614 16.9639 13.5482Z"
              fill="#FFEC3E"
            ></path>
          </svg>
        </div>
        <img
          class="h-full w-full object-cover"
          src="boldui-assets/images/map3.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default ContactUs;
