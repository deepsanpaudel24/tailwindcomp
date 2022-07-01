import React from "react";

const BlogDetail = () => {
  return (
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="mb-10 max-w-2xl mx-auto text-center">
          <a
            class="uppercase text-base lg:text-xl text-green-600 hover:text-green-700 hover:underline"
            href="#"
          >
            Travel
          </a>
          <span class="text-base lg:text-xl text-gray-400">24 Jan, 2021</span>
          <div class="mt-2">
            <h2 class="mb-6 text-4xl lg:text-5xl font-bold font-heading">
              Curabitur vestibulum odio maximus ipsum
            </h2>
            <div class="flex justify-center">
              <div class="mr-4">
                <img
                  class="w-12 h-12 object-cover object-top rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                  alt=""
                />
              </div>
              <div class="text-left">
                <a href="#">
                  <h3 class="text-gray-500 hover:text-gray-600 hover:underline font-bold">
                    Alice Bradley
                  </h3>
                </a>
                <a href="#">
                  <span class="text-xs text-green-600 font-bold">Author</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-10">
          <img
            class="w-full h-80 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
            alt=""
          />
        </div>
        <div class="max-w-2xl mx-auto">
          <p class="mb-6 leading-loose text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo est eget consequat imperdiet. Suspendisse laoreet
            scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula.
            Suspendisse potenti. Ut in nulla a purus bibendum convallis.
            Suspendisse id nunc maximus, suscipit ante ac, vulputate massa. Sed
            ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet
            mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat
            fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla
            sed erat molestie, auctor mauris lobortis, iaculis justo.
          </p>
          <p class="leading-loose text-gray-500">
            Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt
            lorem cursus suscipit. Integer scelerisque sem et sem porta, eu
            volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam
            mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus
            tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut
            fringilla tincidunt, augue diam pretium augue, sit amet vestibulum
            nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices
            ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum
            massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim
            facilisis enim, ut dictum lacus neque in urna. Nam metus elit,
            ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id
            lectus pellentesque, suscipit dolor eget, consequat velit.
            Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam
            felis justo, ut sagittis nunc maximus ut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
