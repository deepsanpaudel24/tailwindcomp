import React from "react";

const CookiePolicy = () => {
  return (
    <div class="fixed top-0 left-0 right-0 z-50 bg-black">
      <div class="container mx-auto px-4">
        <div class="py-10 px-8 md:px-16 bg-black">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full lg:w-2/3 px-4 mb-6 lg:mb-0">
              <h3 class="mb-4 text-lg text-white font-heading">
                Cookie Policy
              </h3>
              <p class="text-sm text-gray-500">
                We use cookies to personalise content, to provide social media
                features and to analyse our traffic. We also share information
                about your use of our site with our social media, advertising
                and analytics partners. If you want to change your cookie
                setting, please see the ‘how to reject cookies' section of our .
                Otherwise, if you agree to our use of cookies, please continue
                to use our website.
              </p>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <div class="flex flex-wrap justify-center lg:justify-end items-center">
                <a
                  class="inline-flex w-full md:w-auto mb-4 md:mb-0 md:mr-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
                  <span class="text-sm font-heading">Accept</span>
                </a>
                <a
                  class="inline-flex items-center text-white hover:underline"
                  href="#"
                >
                  <span class="mr-2 text-sm font-heading">Allow</span>
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z"
                      fill="#FFEC3E"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
