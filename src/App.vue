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
  <previous-jobs />
  <!-- <OverlayButtons /> -->
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import HeaderMobileBar from "./components/mobile/HeaderMobileBar";

import PresentationBox from "./components/PresentationBox";
import PreviousJobs from "./components/PreviousJobs";
// import OverlayButtons from "./components/OverlayButtons.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    HeaderMobileBar,
    PresentationBox,
    PreviousJobs,
    // OverlayButtons,
  },
  data() {
    return {
      webTitle: "OTROCA.DEV",
      menuElements: [
        {
          name: "Download my CV!",
          icon: ["fas", "file-arrow-down"],
          url: "docs/CV_OtRoca_en(2024).pdf",
        },
      ],
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
