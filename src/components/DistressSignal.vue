<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import { getDataFromDatabase, onDatabaseDataChange } from "../firebase";

const databaseData = ref({});

onMounted(async () => {
  try {
    const paths = ["isClimberDanger"];

    for (const path of paths) {
      const data = await getDataFromDatabase(path);
      databaseData.value[path] = data;

      // Listen for changes in each path
      onDatabaseDataChange(path, (newData) => {
        databaseData.value[path] = newData;
      });
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
});
</script>

<template>
  <main>
    <div
      v-if="databaseData.isClimberDanger"
      class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
    >
      <div class="flex items-center">
        <svg
          class="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <h3 class="text-lg font-medium">Climber is in danger!</h3>
      </div>
      <div class="mt-2 mb-4 text-sm">
        Immediately initiate the emergency response protocol: alert the nearest
        search and rescue team about the distress signal and provide them with
        the exact coordinates of the mountain climber.
      </div>
      <div class="flex">
        <RouterLink
          to="/map"
          class="flex bg-red-700 text-white text-md font-sans subpixel-antialiased shadow-md shadow-red-500/50 border-y rounded-md px-2 border-sky-100 hover:bg-red-900 hover:-translate-y-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
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
  </main>
</template>
