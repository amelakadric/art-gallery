import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeViewEng from "../views/HomeViewEng.vue";
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
    path: "/homesrb",
    name: "home",
    component: HomeView,
  },
  {
    path: "/homeeng",
    name: "homeEn",
    component: HomeViewEng,
  },
  {
    path: "/aboutussrb",
    name: "aboutussrb",
    component: AboutsUsView,
  },
  {
    path: "/aboutuseng",
    name: "aboutuseng",
    component: AboutsUsView,
  },
  {
    path: "/exhibitionsrb",
    name: "exhibitionsrb",
    component: ExhibitionView,
  },
  {
    path: "/exhibitioneng",
    name: "exhibitioneng",
    component: ExhibitionView,
  },
  {
    path: "/contactussrb",
    name: "contactussrb",
    component: ContactUsView,
  },
  {
    path: "/contactuseng",
    name: "contactuseng",
    component: ContactUsView,
  },
  {
    path: "/artistssrb",
    name: "artistssrb",
    component: ArtistsView,
  },
  {
    path: "/artistseng",
    name: "artistseng",
    component: ArtistsView,
  },
  {
    path: "/myAccountsrb",
    name: "myAccountsrb",
    component: MyAccountView,
  },
  {
    path: "/myAccounteng",
    name: "myAccounteng",
    component: MyAccountView,
  },
  {
    path: "/paintingssrb",
    name: "paintingssrb",
    component: PaintingsView,
  },
  {
    path: "/paintingseng",
    name: "paintingseng",
    component: PaintingsView,
  },
  {
    path: "/sculpturessrb",
    name: "sculpturessrb",
    component: SculptureView,
  },
  {
    path: "/sculptureseng",
    name: "sculptureseng",
    component: SculptureView,
  },
  {
    path: "/architecturesrb",
    name: "architecturesrb",
    component: ArchitectureView,
  },
  {
    path: "/architectureeng",
    name: "architectureeng",
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
