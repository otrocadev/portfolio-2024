<template>
  <div class="side-menu-wrapper">
    <div class="side-menu">
      <button id="close-menu-button" @click="toggleSideMenu()">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          size="lg"
          style="color: var(--primaryColor)"
        />
      </button>
      <nav class="menuElements">
        <a class="no-border-button" :href="menuElements[0].url">
          <font-awesome-icon
            :icon="[menuElements[0].icon[0], menuElements[0].icon[1]]"
            color="inherit"
            download
          />
          {{ menuElements[0].name }}</a
        >
        <!-- <a
          class="no-border-button"
          v-for="(menuElement, index) in menuElements"
          :key="index"
        >
          {{ menuElement }}</a
        > -->
      </nav>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    toggleSideMenu: Function,
    menuElements: Array,
  },

  mounted() {
    gsap.from(".side-menu", {
      x: 1000,
      ease: "power2.out",
      duration: 1.5,
    });
  },

  beforeUnmount() {
    gsap.to(".side-menu", {
      x: 0,
      ease: "power2.in",
      duration: 3,
    });
  },
};
</script>

<style scoped>
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

.menuElements {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
}
</style>
