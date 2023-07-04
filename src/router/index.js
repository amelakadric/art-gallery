import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutsUsView from "../views/AboutUsView.vue";
import ExhibitionView from "../views/ExhibitionView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import ArtistsView from "../views/ArtistsView.vue";
import MyAccountView from "../views/MyAccountView.vue";
import PaintingsView from "../views/PaintingsView.vue";
import SculptureView from "../views/SculptureView.vue";
import ArchitectureView from "../views/ArchitectureView.vue";
import ArtworkDetailsView from "../views/ArtworkDetailsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: AboutsUsView,
  },
  {
    path: "/exhibition",
    name: "exhibition",
    component: ExhibitionView,
  },
  {
    path: "/contactus",
    name: "contactus",
    component: ContactUsView,
  },
  {
    path: "/artists",
    name: "artists",
    component: ArtistsView,
  },
  {
    path: "/myAccount",
    name: "myAccount",
    component: MyAccountView,
  },
  {
    path: "/paintings",
    name: "paintings",
    component: PaintingsView,
  },
  {
    path: "/sculptures",
    name: "sculptures",
    component: SculptureView,
  },
  {
    path: "/architecture",
    name: "architecture",
    component: ArchitectureView,
  },

  {
    name: "ArtworkDetailsView",
    path: "/artwork/:id",
    component: ArtworkDetailsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
