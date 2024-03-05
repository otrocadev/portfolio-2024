<template>
  <link rel="icon" type="image/ico" href="/favicon.jpg" />
  <HeaderBar />
  <PresentationBox />
  <p>More content soon!</p>
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import PresentationBox from "./components/PresentationBox";

export default {
  name: "App",
  components: {
    HeaderBar,
    PresentationBox,
  },
};
</script>

<style>
@import url("./styles.css");
</style>
