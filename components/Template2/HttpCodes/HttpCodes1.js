import React from "react";

const HttpCodes1 = () => {
  return (
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-xl mx-auto">
          <div class="py-12 px-6 bg-white rounded shadow">
            <img class="mx-auto" src="/images/notfound.svg" alt="" />
            <div class="text-center">
              <span class="mb-6 text-4xl text-green-600 font-bold">
                Whoops!
              </span>
              <h3 class="mb-2 text-4xl font-bold">Something went wrong!</h3>
              <p class="mb-8 text-gray-400">
                Sorry, but we are unable to open this page
              </p>
              <div>
                <a
                  class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-4 inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose text-gray-50 bg-green-600 hover:bg-green-700"
                  href="#"
                >
                  Go back to Homepage
                </a>
                <a
                  class="w-full lg:w-auto inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose bg-white hover:bg-gray-50"
                  href="#"
                >
                  Try Again
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HttpCodes1;
