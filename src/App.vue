<template>
  <link rel="icon" type="image/ico" href="/favicon.jpg" />
  <HeaderBar
    v-if="!isMobile"
    :menuElements="menuElements"
    :webTitle="webTitle"
  />
  <HeaderMobileBar
    v-if="isMobile"
    :webTitle="webTitle"
    :menuElements="menuElements"
  />
  <PresentationBox :isMobile="isMobile" />
  <!-- <OverlayButtons /> -->
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import HeaderMobileBar from "./components/mobile/HeaderMobileBar";

import PresentationBox from "./components/PresentationBox";
// import OverlayButtons from "./components/OverlayButtons.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    HeaderMobileBar,
    PresentationBox,
    // OverlayButtons,
  },
  data() {
    return {
      webTitle: "OTROCA.DEV",
      menuElements: ["Experience", "Projects", "Studies", "Contact"],
      windowWidth: window.innerWidth,
      isMobile: false,
    };
  },

  beforeMount() {
    this.selectIfMobile();
  },

  // Check if the window resizes:
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    selectIfMobile() {
      // changes isMobile variable
      if (this.windowWidth <= 1024) {
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.selectIfMobile();
    },
  },
};
</script>

<style>
@import url("./styles.css");
</style>
