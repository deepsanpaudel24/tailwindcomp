import React from 'react'

const SignIn2 = () => {
  return (
    <section class="py-10 lg:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-xl mx-auto">
        <div class="mb-10">
          <a class="text-3xl font-bold leading-none" href="#">
            <img class="h-12 mx-auto" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto">
          </a>
        </div>
        <div class="mb-6 lg:mb-10 p-6 lg:p-12 bg-white shadow rounded">
          <div class="mb-6">
            <span class="text-gray-500">Sign In</span>
            <h3 class="text-2xl font-bold">Join our community</h3>
          </div>
          <form action="">
            <div class="mb-3 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com"/>
              <svg class="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
              </svg>
            </div>
            <div class="mb-6 flex p-4 bg-gray-50 rounded">
              <input class="w-full text-xs bg-gray-50 outline-none" type="password" placeholder="Enter your password"/>
              <button>
                <svg class="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
            <div class="text-center">
              <button class="mb-4 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50">Sign In</button>
              <a class="text-xs text-green-600 hover:underline" href="#">Forgot password?</a>
              <a class="mt-8 mb-4 p-4 flex justify-center items-center border rounded hover:bg-gray-50" href="#">
                <img class="mr-4" src="https://shuffle.dev/atis-assets/social/facebook-logo.png" alt=""/>
                <span class="text-xs text-gray-500 font-bold">Sign In with Facebook</span>
              </a>
              <a class="p-4 flex justify-center items-center border rounded hover:bg-gray-50" href="#">
                <img class="mr-4" src="https://shuffle.dev/atis-assets/social/google-logo.png" alt=""/>
                <span class="text-xs text-gray-500 font-bold">Sign In with Google</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignIn2