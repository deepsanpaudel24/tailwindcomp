import React from "react";

const Contact1 = () => {
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
          <div class="mb-12">
            <h2 class="text-4xl lg:text-5xl font-bold font-heading">Contact</h2>
            <p class="text-gray-500 leading-loose">
              Got any question? Let&rsquo;s talk about it.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div class="flex flex-wrap">
                <div class="mb-12 w-full md:w-1/2 lg:w-1/2">
                  <h3 class="mb-2 text-3xl lg:text-4xl font-bold">Office</h3>
                  <p class="text-gray-400">359 Hidden Valley</p>
                  <p class="text-gray-400">Road, NY</p>
                </div>
                <div class="mb-12 w-full md:w-1/2">
                  <h3 class="mb-2 text-3xl lg:text-4xl font-bold">Contacts</h3>
                  <p class="text-gray-400">hallo@gamil.com</p>
                </div>
                <div class="w-full md:w-1/3 lg:w-full">
                  <h3 class="mb-2 text-3xl lg:text-4xl font-bold">Socials</h3>
                  <div class="flex">
                    <a class="mr-3" href="#">
                      <img src="atis-assets/social/facebook.svg" alt="" />
                    </a>
                    <a class="mr-3" href="#">
                      <img src="atis-assets/social/twitter.svg" alt="" />
                    </a>
                    <a href="#">
                      <img src="atis-assets/social/instagram.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div class="max-w-md lg:mx-auto">
                <form action="">
                  <div class="mb-4 text-sm">
                    <span class="mr-4 font-semibold">Department:</span>
                    <label class="mr-4">
                      <input
                        class="mr-1"
                        type="radio"
                        name="department"
                        value="1"
                        checked=""
                      />
                      <span>Support</span>
                    </label>
                    <label>
                      <input
                        class="mr-1"
                        type="radio"
                        name="department"
                        value="2"
                      />
                      <span>Sales</span>
                    </label>
                  </div>
                  <div class="mb-4">
                    <input
                      class="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      class="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      class="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="mb-4">
                    <textarea
                      class="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div class="mb-4">
                    <label class="flex px-2 bg-white rounded">
                      <input
                        class="hidden"
                        type="file"
                        placeholder="Choose file.."
                        name="Choose file"
                      />
                      <div class="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-gray-500 hover:bg-gray-600 rounded cursor-pointer transition duration-200">
                        Browse
                      </div>
                    </label>
                  </div>
                  <div class="flex justify-between items-center">
                    <label>
                      <input
                        class="mr-1"
                        type="checkbox"
                        name="terms"
                        value="1"
                      />
                      <span class="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200">
                      Get Started
                    </button>
                  </div>
                </form>
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

export default Contact1;
