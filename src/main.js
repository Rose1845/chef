import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import FontAwesomePLugin from "./plugins/FontAwesome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import "./assets/main.css";
// import store from "./store";
const app = createApp(App);

app.use(router);
app.use(FontAwesomePLugin);
// app.use(store);
app.mount("#app");
