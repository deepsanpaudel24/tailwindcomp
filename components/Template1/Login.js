import React from "react";

const Login = () => {
  return (
    <section class="relative py-20 bg-black overflow-hidden">
      <div class="max-w-md mx-auto pt-12 pb-20 lg:py-32 text-center">
        <h2 class="mb-4 text-2xl text-white font-heading">Create account</h2>
        <p class="mb-8 text-lg text-gray-500">
          Take a big step forward in growing your business with this great tool.
        </p>
        <div>
          <input
            class="w-full mb-4 py-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
            type="email"
            placeholder="Type your e-mail"
          />
          <input
            class="w-full mb-6 py-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
            type="password"
            placeholder="Enter password"
          />

          <label class="block mb-6" for="">
            <input type="checkbox" />
            <span class="text-sm text-white">
              <span> By clicking up, you agree to our</span>
              <a class="text-blue-200 hover:underline" href="#">
                Terms, Data Policy and Cookies Policy.
              </a>
            </span>
          </label>
          <a
            class="inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
            <span class="text-sm font-medium font-heading">Sign up</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
