<script setup>
import { ref, onMounted } from "vue";
import { getDataFromDatabase, onDatabaseDataChange } from "../firebase";

const databaseData = ref({});
const isClimberInDanger = ref(false);

onMounted(async () => {
  try {
    const paths = ["isClimberDanger"];

    for (const path of paths) {
      const data = await getDataFromDatabase(path);
      databaseData.value[path] = data;

      // Listen for changes in each path
      onDatabaseDataChange(path, (newData) => {
        databaseData.value[path] = newData || "No data available";

        if (path === "isClimberDanger") {
          isClimberInDanger.value = newData === true;
        }
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
      v-if="isClimberInDanger"
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
        Immediately initiate the emergency response protocol: alert the nearest search and rescue team about the distress signal and provide them with the exact coordinates of the mountain climber.
      </div>
    </div>
  </main>
</template>
