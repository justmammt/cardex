import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../index.css";
import { createAuth0 } from "@auth0/auth0-vue";

createApp(App)
  .use(router, createAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  }))
  .mount("#app")

