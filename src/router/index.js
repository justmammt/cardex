import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../components/NotFoundPage.vue";
import GitHubView from "../views/GitHubView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundView,
  },
  {
    path: "/github-overview",
    name: "GitHub-Infos",
    component: GitHubView,
    meta: { RunGithubFetch: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
