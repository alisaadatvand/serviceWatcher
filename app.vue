

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const main = ref("default");
const container: any = ref<HTMLElement | null>(null);

onMounted(async () => {
  // Simulate an asynchronous operation, for example, fetching data from an API
  // Here, we're just using a setTimeout as a placeholder
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Update the main variable based on your logic
  main.value = "other";

  const container: any = document.querySelector(".mainPage");

  const s = [...container.querySelectorAll(".status")];
  const elemCount = s.length;

  const x = Math.max(Math.floor(window.innerWidth / elemCount), 50);

  if (elemCount === 1) {
    document.documentElement.style.setProperty("--s_width", `50%`);
    document.documentElement.style.setProperty("--s_height", `50%`);
  }

  document.documentElement.style.setProperty("--x", `${x}px`);
  console.log(x);

  const calc = (num: any) => {
    return Math.ceil(Math.sqrt(num));
  };

  const res: any = calc(elemCount);
  console.log("res: " + res);

  // Set the CSS variables directly without using DOMContentLoaded event
  document.documentElement.style.setProperty("--row_count", res);
  document.documentElement.style.setProperty("--column_count", res);

  // ******************* queueu ***************

  const right: any = document.querySelector(".Right");

  const q = [...right.querySelectorAll(".queue")];
  const qCount: any = q.length;

  if (qCount === 1) {
    document.documentElement.style.setProperty("--q_height", `300px`);
  }

  document.documentElement.style.setProperty("--qrow_count", qCount);
  // document.documentElement.style.setProperty("--q_height", `${window.innerHeight/(qCount+2)}px`);

  if(qCount<=5){
  document.documentElement.style.setProperty("--f_s", `1.5rem`);
  }else {
  document.documentElement.style.setProperty("--f_s", `1rem`);
  }
});
</script>
