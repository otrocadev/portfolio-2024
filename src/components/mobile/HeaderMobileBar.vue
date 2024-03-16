<template>
  <section class="header-bar">
    <h2>{{ webTitle }}</h2>
    <button id="mobile-menu-button" @click="toggleSideMenu()">
      <font-awesome-icon
        :icon="['fas', 'bars-staggered']"
        flip="horizontal"
        size="lg"
        style="color: var(--primaryColor)"
      />
    </button>
  </section>
  <side-mobile-menu
    v-if="isMenuOpen"
    :toggleSideMenu="toggleSideMenu"
    :menuElements="menuElements"
  />
</template>

<script>
import SideMobileMenu from "./SideMobileMenu.vue";

export default {
  components: { SideMobileMenu },
  props: {
    webTitle: String,
    menuElements: Array,
  },

  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleSideMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.header-bar {
  font-family: Inter, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: var(--forthColor);
  justify-content: space-between;
}

#mobile-menu-button {
  padding: 1rem;
  border-radius: 0.8rem;
  background: var(--forthColor);
  border: 2px solid var(--primaryColor);
}

.side-menu-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  width: 80vw;
  height: 100%;
  z-index: 1;
}

.side-menu {
  position: fixed;
  top: 2%;
  width: 100%;
  height: 96%;
  background: var(--forthColor);
  border: 3px solid var(--primaryColor);
  border-radius: 0.8rem;
}

#close-menu-button {
  margin: 2rem;
  background: var(--forthColor);
  font-size: 1.2rem;
  border: none;
}

.menu-elements {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
}
</style>
