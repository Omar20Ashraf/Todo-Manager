import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";

const app = createApp(App);

// Use Vuex store
app.use(store);

app.mount("#app");
