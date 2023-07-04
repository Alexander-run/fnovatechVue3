import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Residential from "../pages/Residential.vue";
import About from "../pages/About.vue";
import Installation from "../pages/Installation.vue";
import Commercial from "../pages/Commercial.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },{
    path: "/contact",
    name: "Contact",
    component: Contact,
  },{
    path: "/residential",
    name: "Residential",
    component: Residential,
  },{
    path: "/commercial",
    name: "Commercial",
    component: Commercial,
  },{
    path: "/about",
    name: "About",
    component: About,
  },{
    path: "/installation",
    name: "Installation",
    component: Installation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;