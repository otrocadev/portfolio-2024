<template>
  <link rel="icon" type="image/ico" href="/favicon.jpg" />
  <header-bar
    v-if="!isMobile"
    :menuElements="menuElements"
    :webTitle="webTitle"
  />
  <header-mobile-bar
    v-if="isMobile"
    :webTitle="webTitle"
    :menuElements="menuElements"
  />
  <presentation-box :isMobile="isMobile" />
  <previous-jobs :isMobile="isMobile" />
  <!-- <OverlayButtons /> -->
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HeaderMobileBar from './components/mobile/HeaderMobileBar.vue'

import PresentationBox from './components/PresentationBox.vue'
import PreviousJobs from './components/PreviousJobs.vue'
// import OverlayButtons from "./components/OverlayButtons.vue";

export default {
  name: 'App',
  components: {
    HeaderBar,
    HeaderMobileBar,
    PresentationBox,
    PreviousJobs,
    // OverlayButtons,
  },
  data() {
    return {
      webTitle: 'OTROCA.DEV',
      menuElements: [
        {
          name: 'Download my CV!',
          icon: ['fas', 'file-arrow-down'],
          url: 'docs/OtRocaCVs.pdf',
        },
      ],
      windowWidth: window.innerWidth,
      isMobile: false,
    }
  },

  beforeMount() {
    this.selectIfMobile()
  },

  // Check if the window resizes:
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    selectIfMobile() {
      // changes isMobile variable
      if (this.windowWidth <= 1024) {
        this.isMobile = true
        return
      }
      this.isMobile = false
    },
    onResize() {
      this.windowWidth = window.innerWidth
      this.selectIfMobile()
    },
  },
}
</script>

<style>
@import url('./styles.css');
</style>
