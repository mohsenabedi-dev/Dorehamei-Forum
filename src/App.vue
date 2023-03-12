<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
useHead({
  templateParams: {
    seperator: "|",
    site: {
      name: "دورهمی",
      url: "https://dorehamei.com",
    },
  },
  titleTemplate: "%site.name %seperator %s",
  meta: [],
});
</script>
