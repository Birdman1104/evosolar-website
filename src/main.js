import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";

window.addEventListener("error", function (e) {
  if (e.message?.includes("_.Nc")) {
    // Prevent Google Maps internal error from crashing
    e.preventDefault();
    return false;
  }
});

createApp(App).mount("#app");
