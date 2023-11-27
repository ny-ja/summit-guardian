<script setup>
import { RouterLink, RouterView } from "vue-router";
import DistressSignal from "./components/DistressSignal.vue";
</script>

<template>
  <div class="min-w-full min-h-screen bg-slate-900">
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <DistressSignal />

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
              to="/team"
              class="text-teal-100 text-md font-sans subpixel-antialiased shadow-lg shadow-cyan-500/50 border-y rounded-md px-2 border-sky-100 hover:bg-cyan-400 hover:-translate-y-1"
              >TEAM</RouterLink
            >
          </nav>

          <div class="">
            <div class="mt-10">
              <p
                class="text-cyan-400 font-sans text-4xl font-bold md:text-5xl"
                style="text-shadow: 2px 2px #000000"
              >
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
        </div>

        <RouterView />
      </div>
    </div>
  </div>
</template>
