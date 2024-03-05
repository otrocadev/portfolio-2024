<template>
  <link rel="icon" type="image/ico" href="/favicon.jpg" />
  <HeaderBar />
  <PresentationBox />
  <OverlayButtons />
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import PresentationBox from "./components/PresentationBox";
import OverlayButtons from "./components/OverlayButtons.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    PresentationBox,
    OverlayButtons,
  },
};
</script>

<style>
@import url("./styles.css");
</style>
