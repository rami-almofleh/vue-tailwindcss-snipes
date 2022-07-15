<template>
  <main class="p-4">
    <router-link to="/text-right-img-left">Text right img left</router-link><br />
    <router-link to="/img-top-content-bottom">Image Top & Content Bottom</router-link>
  </main>
  <router-view></router-view>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>