<template>
  <section class="header-bar">
    <h2>{{ webTitle }}</h2>
    <div class="header-navigation">
      <!-- Provisionaly while not having routing set up -->
      <a
        class="custom-button"
        :href="menuElements[0].url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          :icon="[menuElements[0].icon[0], menuElements[0].icon[1]]"
          color="inherit"
        />
        {{ menuElements[0].name }}</a
      >
      <!-- <a
        class="custom-button"
        v-for="(menuElement, index) in menuElements"
        :key="index"
        :href="menuElement.url"
      >
        <font-awesome-icon
          :icon="[menuElement.icon[0], menuElement.icon[1]]"
          color="inherit"
        />
        {{ menuElement.name }}</a
      > -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    webTitle: String,
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
  font-family: Inter, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.header-navigation {
  display: flex;
  margin-right: 2rem;
}
</style>
