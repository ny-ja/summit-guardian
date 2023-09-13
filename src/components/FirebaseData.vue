<script setup>
import { ref, onMounted } from "vue";
import { getDataFromDatabase, onDatabaseDataChange } from "../firebase";

const databaseData = ref({});

onMounted(async () => {
  try {
    const paths = ["Sensor/heart_rate"];

    for (const path of paths) {
      const data = await getDataFromDatabase(path);
      databaseData.value[path] = data;

      // Listen for changes in each path
      onDatabaseDataChange(path, (newData) => {
        databaseData.value[path] = newData || "No data available";
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
      class="lg:mt-30"
    >
      <div class="relative grid gap-6 sm:grid-row-2 md:grid-cols-2">
        <div
          class="border-y text-center px-24 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="absolute inset-x-0 bottom-0">
            <p
              class="mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
            >
              HEART RATE:
              {{ databaseData["Sensor/heart_rate"] || "No data available" }}
            </p>
          </div>
        </div>
        <div
          class="border-y text-center px-24 py-40 transition duration-300 transform bg-blood-oxygen bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="absolute inset-x-0 bottom-0">
            <p
              class="mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
            >
              BLOOD OXYGEN:
              {{ databaseData["Sensor/heart_rate"] || "No data available" }}
            </p>
          </div>
        </div>
        <div
          class="border-y text-center px-24 py-40 transition duration-300 transform bg-body-temperature bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="absolute inset-x-0 bottom-0">
            <p
              class="mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
            >
              BODY TEM:
              {{ databaseData["Sensor/heart_rate"] || "No data available" }}
            </p>
          </div>
        </div>
        <div
          class="border-y text-center px-24 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="absolute inset-x-0 bottom-0">
            <p
              class="mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
            >
              HEART RATE:
              {{ databaseData["Sensor/heart_rate"] || "No data available" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
