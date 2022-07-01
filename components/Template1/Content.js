import React from "react";

const Content = () => {
  return (
    <section class="bg-black overflow-hidden">
      <img
        class="w-full h-96 md:h-128 object-cover"
        src="https://shuffle.dev/boldui-assets/images/men5.png"
        alt=""
      />
      <div class="container mx-auto px-4">
        <div class="relative max-w-xl mx-auto py-20">
          <img
            class="absolute top-0 left-0 transform -translate-x-1/2 h-96"
            src="https://shuffle.dev/boldui-assets/elements/ellipse.svg"
            alt=""
          />
          <ul class="relative flex items-center mb-10">
            <li class="flex items-center mr-3">
              <a
                class="inline-block mr-3 text-xs text-gray-500 uppercase font-semibold"
                href="#"
              >
                Home
              </a>
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.01 6.18506H0L0 4.10173H12.01V0.976726L16 5.14339L12.01 9.31006V6.18506Z"
                  fill="#7E7E7E"
                ></path>
              </svg>
            </li>
            <li class="flex items-center mr-3">
              <a
                class="inline-block mr-3 text-xs text-gray-500 uppercase font-semibold"
                href="#"
              >
                Blog
              </a>
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.01 6.18506H0L0 4.10173H12.01V0.976726L16 5.14339L12.01 9.31006V6.18506Z"
                  fill="#7E7E7E"
                ></path>
              </svg>
            </li>
            <li>
              <a
                class="inline-block text-xs text-gray-500 uppercase font-semibold"
                href="#"
              >
                Article
              </a>
            </li>
          </ul>
          <h2 class="mb-10 text-3xl text-white uppercase font-heading">
            Take quick action that increases your brand's regular profit.
          </h2>
          <p class="mb-6 text-lg text-gray-500">
            On the other hand, perfection can also haunt some of us to the point
            of inaction. While some are too quick to act and end up wasting
            resources, others are completely paralyzed by the “excessive” amount
            of work behind building something new.
          </p>
          <div class="flex items-center mb-10">
            <img
              class="h-24"
              src="https://shuffle.dev/boldui-assets/images/team6.png"
              alt=""
            />
            <div class="ml-4">
              <h3 class="mb-2 text-white font-heading">Clara Osborne</h3>
              <p class="text-xs text-gray-500 uppercase font-semibold tracking-widest">
                Product designer
              </p>
            </div>
          </div>
          <div class="text-left">
            <p class="mb-8 text-lg text-gray-500">
              These types of questions led me to miss numerous deadlines, and I
              wasted time and energy in back-and-forth communication. Sadly,
              this situation could have been avoided if the wireframes had
              provided enough detail.
            </p>
            <p class="text-lg text-gray-500">
              Now that I am a UX designer, I notice that some designers tend to
              forget that wireframes are equally creative and technical. We are
              responsible for designing great ideas, but we are also responsible
              for creating product specifications. I admit that there can be so
              many details to remember that it’s easy to lose track. To save
              time and energy for myself, I gathered all of my years of
              wireframing knowledge into a single checklist that I refer to
              throughout the process. And now I am sharing this knowledge with
              you, so that you can get back to being creative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
