<template>
  <div class="bg-slate-950">
    <div
      class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div
        class="relative flex items-center justify-center"
      >
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="150" height="150" />
      </div>
    </div>
  </div>
  <div class="bg-slate-950 flex items-center justify-center">
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="absolute inset-x-0 top-0 hidden overflow-hidden md:flex md:inset-y-0"
      >
        <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-sky-950 animate-spin">
          <circle
            fill="currentColor"
            fill-opacity="0.4"
            cx="44"
            cy="44"
            r="15.5"
          ></circle>
          <circle
            fill-opacity="0.1"
            fill="currentColor"
            cx="44"
            cy="44"
            r="44"
          ></circle>
          <circle
            fill-opacity="0.1"
            fill="currentColor"
            cx="44"
            cy="44"
            r="37.5"
          ></circle>
          <circle
            fill-opacity="0.1"
            fill="currentColor"
            cx="44"
            cy="44"
            r="29.5"
          ></circle>
          <circle
            fill-opacity="0.1"
            fill="currentColor"
            cx="44"
            cy="44"
            r="22.5"
          ></circle>
        </svg>
      </div>
      <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          class="border-2 text-center px-28 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="m-2 absolute inset-x-0 bottom-0">
            <p class="text-white font-black overline font-serif text-md antialiased">HEART RATE: {{ databaseData['Sensor/heart_rate'] || 'No data available' }}</p>
          </div>
        </div>
        <div
          class="border-2 text-center px-28 py-40 transition duration-300 transform bg-blood-oxygen bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="m-2 absolute inset-x-0 bottom-0">
            <p class="text-white font-black overline font-serif text-md antialiased">BLOOD OXYGEN: {{ databaseData['Sensor/heart_rate'] || 'No data available' }}</p>
          </div>
        </div>
        <div
          class="border-2 text-center px-28 py-40 transition duration-300 transform bg-body-temperature bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="m-2 absolute inset-x-0 bottom-0">
            <p class="text-white font-black overline font-serif text-md antialiased">BODY TEM: {{ databaseData['Sensor/heart_rate'] || 'No data available' }}</p>
          </div>
        </div>
        <div
          class="border-2 text-center px-28 py-40 transition duration-300 transform bg-heart-rate bg-cover rounded-lg hover:scale-105 md:shadow-xl hover:shadow-stone-500"
        >
          <div class="m-2 absolute inset-x-0 bottom-0">
            <p class="text-white font-black overline font-serif text-md antialiased">HEART RATE: {{ databaseData['Sensor/heart_rate'] || 'No data available' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-slate-950">
    <div class="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
        <p class="text-sm text-gray-500">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <div class="flex items-center mt-4 space-x-4 sm:mt-0">
          <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
              ></path>
            </svg>
          </a>
          <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
            <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
              <circle cx="15" cy="15" r="4"></circle>
              <path
                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
              ></path>
            </svg>
          </a>
          <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue';
import { getDataFromDatabase, onDatabaseDataChange } from './firebase';

const databaseData = ref({});

onMounted(async () => {
  try {
    const paths = [
      'Sensor/heart_rate',
    ];

    for (const path of paths) {
      const data = await getDataFromDatabase(path);
      databaseData.value[path] = data;

      // Listen for changes in each path
      onDatabaseDataChange(path, (newData) => {
        databaseData.value[path] = newData || 'No data available';
      });
    }
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
  }
});
</script>

<!-- <template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/firebase-data">Firebase Data</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
