<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="min-w-full min-h-screen bg-slate-900">
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="relative grid lg:grid-cols-2 gap-4">
        <div class="lg:mt-20">
          <div class="">
            <img src="@/assets/logo.svg" alt="logo" width="80" height="80" />
          </div>

          <nav class="flex mt-10 space-x-2">
            <RouterLink
              to="/"
              class="text-teal-100 text-md font-sans subpixel-antialiased shadow-lg shadow-cyan-500/50 border-y rounded-md px-2 border-sky-100 hover:bg-cyan-400 hover:-translate-y-1"
              >HOME</RouterLink
            >

            <RouterLink
              to="/about"
              class="text-teal-100 text-md font-sans subpixel-antialiased shadow-lg shadow-cyan-500/50 border-y rounded-md px-2 border-sky-100 hover:bg-cyan-400 hover:-translate-y-1"
              >TEAM</RouterLink
            >
          </nav>

          <div class="">
            <div class="mt-10">
              <p class="text-cyan-400 font-sans text-4xl font-bold md:text-5xl">
                SUMMIT GUARDIAN
              </p>
            </div>
            <div class="mt-4">
              <p class="text-gray-300 font-sans text-xl">
                A Comprehensive IOT soluttion for mountain climber health
                monitoring and GPS tracking in search and rescue operations.
              </p>
            </div>
          </div>

          <div class="flex mt-10">
            <RouterLink
              to="#"
              class="flex text-teal-100 text-xl font-sans subpixel-antialiased shadow-lg shadow-cyan-500/50 border-y rounded-md px-2 border-sky-100 bg-cyan-700 hover:bg-cyan-400 hover:-translate-y-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>View climber's location</span></RouterLink
            >
          </div>
        </div>

        <RouterView />
      </div>
    </div>
  </div>
</template>
