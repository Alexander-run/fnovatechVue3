import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Residential from "../pages/Residential.vue";
import About from "../pages/About.vue";
import Installation from "../pages/Installation.vue";
import Commercial from "../pages/Commercial.vue";

import How from "../pages/How.vue"
import Size from "../pages/Size.vue"
import Welcome from "../pages/Welcome.vue";
import Install from "../pages/Install.vue";
import Customer from "../pages/Customer.vue";
import Finance from "../pages/Finance.vue";

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
  },{
    path: "/how",
    name: "How",
    component: How,
  },{
    path: "/size",
    name: "Size",
    component: Size,
  },{
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
  },{
    path: "/install",
    name: "Install",
    component: Install,
  },{
    path: "/customer",
    name: "Customer",
    component: Customer,
  },{
    path: "/finance",
    name: "Finance",
    component: Finance,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;