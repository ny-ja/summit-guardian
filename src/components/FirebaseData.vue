<script setup>
import { ref, onMounted } from "vue";
import { getDataFromDatabase, onDatabaseDataChange } from "../firebase";

const databaseData = ref({});
const isHeartRateAbnormal = ref(false);
const isBodyTempAbnormal = ref(false);
const isColdAmbient = ref(false);
const isHotAmbient = ref(false);

onMounted(async () => {
  try {
    const paths = [
      "sensor/heartRate",
      "sensor/bloodOxygen",
      "sensor/bodyTemperature",
      "sensor/ambientTemperature",
    ];

    for (const path of paths) {
      const data = await getDataFromDatabase(path);
      databaseData.value[path] = data;

      // Listen for changes in each path
      onDatabaseDataChange(path, (newData) => {
        databaseData.value[path] = newData || "Initializing...";

        if (path === "sensor/heartRate") {
          isHeartRateAbnormal.value = newData < 60 || newData > 100;
        }

        if (path === "sensor/bodyTemperature") {
          isBodyTempAbnormal.value = newData < 36.4 || newData > 37.6;
        }

        if (path === "sensor/ambientTemperature") {
          isColdAmbient.value = newData < 60;
        }

        if (path === "sensor/ambientTemperature") {
          isHotAmbient.value = newData > 77;
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
            v-if="isHeartRateAbnormal"
            class="border-y border-red-500 text-center px-24 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg shadow-inner shadow-red-500 hover:scale-105"
          >
            <div class="absolute inset-x-0 bottom-0">
              <p
                class="item-center justify-center mx-4 my-2 text-red-500 font-black font-sans text-xl tracking-tighter subpixel-antialiased border-y rounded-md border-red-500"
                style="text-shadow: 2px 2px #242222"
              >
                Heart Rate:
                {{ databaseData["sensor/heartRate"] || "Initializing..." }}
                bpm
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
                {{ databaseData["sensor/heartRate"] || "Initializing..." }}
                bpm
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
        <div>
          <div
            v-if="isBodyTempAbnormal"
            class="border-y border-red-500 text-center px-24 py-40 transition duration-300 transform bg-body-temperature bg-cover rounded-lg shadow-inner shadow-red-500 hover:scale-105"
          >
            <div class="absolute inset-x-0 bottom-0">
              <p
                class="item-center justify-center mx-4 my-2 text-red-500 font-black font-sans text-xl tracking-tighter subpixel-antialiased border-y rounded-md border-red-500"
                style="text-shadow: 2px 2px #242222"
              >
                Body Temp:
                {{
                  databaseData["sensor/bodyTemperature"] || "Initializing..."
                }}
                °C
              </p>
            </div>
          </div>
          <div
            v-else
            class="border-y text-center px-24 py-40 transition duration-300 transform bg-body-temperature bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
          >
            <div class="absolute inset-x-0 bottom-0">
              <div
                class="item-center justify-center mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
                style="text-shadow: 2px 2px #242222"
              >
                Body Temp:
                {{
                  databaseData["sensor/bodyTemperature"] || "Initializing..."
                }}
                °C
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            v-if="isColdAmbient"
            class="border-y border-blue-500 text-center px-24 py-40 transition duration-300 transform bg-ambient-temperature bg-cover rounded-lg shadow-inner shadow-blue-500 hover:scale-105"
          >
            <div class="absolute inset-x-0 bottom-0">
              <p
                class="item-center justify-center mx-4 my-2 text-blue-500 font-black font-sans text-xl tracking-tighter subpixel-antialiased border-y rounded-md border-blue-500"
                style="text-shadow: 2px 2px #242222"
              >
                Ambient Temp:
                {{
                  databaseData["sensor/ambientTemperature"] || "Initializing..."
                }}
                °F
              </p>
            </div>
          </div>
          <div
            v-else-if="isHotAmbient"
            class="border-y border-orange-500 text-center px-24 py-40 transition duration-300 transform bg-ambient-temperature bg-cover rounded-lg shadow-inner shadow-orange-500 hover:scale-105"
          >
            <div class="absolute inset-x-0 bottom-0">
              <p
                class="item-center justify-center mx-4 my-2 text-orange-500 font-black font-sans text-xl tracking-tighter subpixel-antialiased border-y rounded-md border-orange-500"
                style="text-shadow: 2px 2px #242222"
              >
                Ambient Temp:
                {{
                  databaseData["sensor/ambientTemperature"] || "Initializing..."
                }}
                °F
              </p>
            </div>
          </div>
          <div
            v-else
            class="border-y text-center px-24 py-40 transition duration-300 transform bg-ambient-temperature bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
          >
            <div class="absolute inset-x-0 bottom-0">
              <div
                class="item-center justify-center mx-4 my-2 text-white font-black font-sans text-xl tracking-tighter subpixel-antialiased shadow-2xl shadow-cyan-500/50 border-y rounded-md border-sky-100"
                style="text-shadow: 2px 2px #242222"
              >
                Ambient Temp:
                {{
                  databaseData["sensor/ambientTemperature"] || "Initializing..."
                }}
                °F
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
