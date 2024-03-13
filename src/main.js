import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBarsStaggered,
  faChevronRight,
  faEnvelope,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Import all icons
library.add(
  faSquareGithub,
  faLinkedin,
  faBarsStaggered,
  faChevronRight,
  faEnvelope,
  faFileArrowDown
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
