import React from "react";

const Navigation = () => {
  return (
    <section class="relative bg-black overflow-hidden">
      <nav class="relative bg-transparent ">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center">
            <div class="pr-14 py-8 ">
              <a
                class="inline-block text-xl text-white font-medium font-heading"
                href="#"
              >
                <img
                  class="h-8"
                  width="auto"
                  src="https://shuffle.dev/boldui-assets/logo/logo-boldui-light.svg"
                  alt=""
                />
              </a>
            </div>

            {/* Links */}

            <div class="hidden lg:flex mx-auto">
              <ul class="flex justify-center">
                <li class="mr-12">
                  <a class="text-gray-500 hover:text-gray-400" href="#">
                    About
                  </a>
                </li>
                <li class="mr-12">
                  <a class="text-gray-500 hover:text-gray-400" href="#">
                    Company
                  </a>
                </li>
                <li class="mr-12">
                  <a class="text-gray-500 hover:text-gray-400" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a class="text-gray-500 hover:text-gray-400" href="#">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Search bar */}
            <div class="hidden lg:flex ml-auto lg:ml-0 mr-8 lg:mr-0 items-center pl-16">
              <div class="flex px-6 py-3 bg-black rounded-full border border-white">
                <input
                  class="w-full pr-4 bg-transparent text-sm text-white placeholder-white outline-none"
                  type="text"
                  placeholder="Search"
                />
                <button class="flex items-center text-yellow-300 hover:text-yellow-400">
                  <span class="mr-2">Go</span>
                  <svg
                    class="mt-1"
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Signin/signup */}
            <div class="hidden lg:flex ml-auto items-center">
              <a
                class="inline-flex mr-8 items-center text-white hover:underline"
                href="#"
              >
                <span class="mr-2 text-xs font-heading">Sign In</span>
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
              <a
                class="inline-flex items-center justify-center py-3 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
                <span class="text-xs font-heading">Sign Up</span>
              </a>
            </div>

            <button class="navbar-burger lg:hidden self-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="6" width="24" height="2" fill="white"></rect>
                <rect y="11" width="24" height="2" fill="white"></rect>
                <rect y="16" width="24" height="2" fill="white"></rect>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="relative flex flex-col py-8 px-10 w-full h-full bg-black border-r overflow-y-auto">
          <a
            class="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32"
            href="#"
          >
            <img
              class="h-8"
              width="auto"
              src="boldui-assets/logo/logo-boldui-light.svg"
              alt=""
            />
          </a>
          <ul class="mb-32">
            <li class="mb-10">
              <a class="flex items-center" href="#">
                <span class="mr-3 text-lg text-white">About</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="mb-10">
              <a class="flex items-center" href="#">
                <span class="mr-3 text-lg text-white">Company</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="mb-10">
              <a class="flex items-center" href="#">
                <span class="mr-3 text-lg text-white">Services</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a class="flex items-center" href="#">
                <span class="mr-3 text-lg text-white">Contact</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <a
            class="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
            <span class="text-sm font-medium uppercase tracking-wider">
              Sign Up
            </span>
          </a>
          <a
            class="flex mb-10 items-center text-white hover:underline"
            href="#"
          >
            <span class="mr-2 text-sm">Log In</span>
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
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
