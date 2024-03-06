<template>
  <section class="header-bar">
    <h2>OTROCA.DEV</h2>
    <div class="header-navigation">
      <a
        class="no-border-button"
        v-for="(menuElement, index) in menuElements"
        :key="index"
      >
        {{ menuElement }}</a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    menuElements: Array,
  },
};
</script>

<style scoped>
.header-bar {
  margin: 0;
  display: flex;
  align-items: center;
  background-color: var(--forthColor);
  justify-content: space-between;
}

h2 {
  margin: 2rem;
}

.header-navigation {
  display: flex;
  margin-right: 2rem;
}
</style>
