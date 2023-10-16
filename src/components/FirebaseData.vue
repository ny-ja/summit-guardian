<script setup>
import { ref, onMounted } from "vue";
import { getDataFromDatabase, onDatabaseDataChange } from "../firebase";

const databaseData = ref({});
const isHeartRateLow = ref(false);

onMounted(async () => {
  try {
    const paths = [
      "Sensor/heart_rate",
      "Sensor/blood_oxygen",
      "Sensor/body_temperature",
    ];

    for (const path of paths) {
      const data = await getDataFromDatabase(path);
      databaseData.value[path] = data;

      // Listen for changes in each path
      onDatabaseDataChange(path, (newData) => {
        databaseData.value[path] = newData || "No data available";

        // Check if heart rate is below 60
        if (path === "Sensor/heart_rate") {
          isHeartRateLow.value = newData < 60;
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
    <div class="lg:mt-30">
      <div class="relative grid gap-6 sm:grid-row-2 md:grid-cols-2">
        <div>
          <div
            v-if="isHeartRateLow"
            class="border-y border-red-500 text-center px-24 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg shadow-inner shadow-red-500 hover:scale-105"
          >
            <div class="absolute inset-x-0 bottom-0">
              <p
                class="item-center justify-center mx-4 my-2 text-red-500 font-black font-sans text-xl tracking-tighter subpixel-antialiased border-y rounded-md border-red-500"
                style="text-shadow: 2px 2px #242222"
              >
                Heart Rate:
                {{ databaseData["Sensor/heart_rate"] || "Initializing..." }}
                bmp
              </p>
            </div>
          </div>
          <div
            v-else
            class="border-y text-center px-24 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
          >
            <div class="absolute inset-x-0 bottom-0">
              <div
                class="item-center justify-center mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
                style="text-shadow: 2px 2px #242222"
              >
                Heart Rate:
                {{ databaseData["Sensor/heart_rate"] || "Initializing..." }}
                bmp
              </div>
            </div>
          </div>
        </div>
        <div
          class="border-y text-center px-24 py-40 transition duration-300 transform bg-blood-oxygen bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="absolute inset-x-0 bottom-0">
            <div
              class="mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
              style="text-shadow: 2px 2px #242222"
            >
              SpO2:
              {{ "No data available" }}
            </div>
          </div>
        </div>
        <div
          class="border-y text-center px-24 py-40 transition duration-300 transform bg-body-temperature bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="absolute inset-x-0 bottom-0">
            <div
              class="mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
              style="text-shadow: 2px 2px #242222"
            >
              Body Temp:
              {{ "No data available" }}
            </div>
          </div>
        </div>
        <div
          class="border-y text-center px-24 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="absolute inset-x-0 bottom-0">
            <div
              class="mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
              style="text-shadow: 2px 2px #242222"
            >
              Heart Rate:
              {{ "No data available" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
