import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeViewEng from "../views/HomeViewEng.vue";
import AboutsUsView from "../views/AboutUsView.vue";
import AboutsUsViewEng from "../views/AboutUsViewEng.vue";
import ExhibitionView from "../views/ExhibitionView.vue";
import ExhibitionViewEng from "../views/ExhibitionViewEng.vue";
import ContactUsView from "../views/ContactUsView.vue";
import ContactUsViewEng from "../views/ContactUsViewEng.vue";
import ArtistsView from "../views/ArtistsView.vue";
import ArtistsViewEng from "../views/ArtistsViewEng.vue";
import MyAccountView from "../views/MyAccountView.vue";
import MyAccountViewEng from "../views/MyAccountViewEng.vue";
import PaintingsView from "../views/PaintingsView.vue";
import PaintingsViewEng from "../views/PaintingsViewEng.vue";
import SculptureView from "../views/SculptureView.vue";
import SculptureViewEng from "../views/SculptureViewEng.vue";
import ArchitectureView from "../views/ArchitectureView.vue";
import ArchitectureViewEng from "../views/ArchitectureViewEng.vue";
import ArtworkDetailsView from "../views/ArtworkDetailsView.vue";
import SearchResultView from "../views/SearchResultView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/srb",
    name: "home",
    component: HomeView,
  },
  {
    path: "/eng",
    name: "home",
    component: HomeViewEng,
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
    component: AboutsUsViewEng,
  },
  {
    path: "/exhibitionsrb",
    name: "exhibitionsrb",
    component: ExhibitionView,
  },
  {
    path: "/exhibitioneng",
    name: "exhibitioneng",
    component: ExhibitionViewEng,
  },
  {
    path: "/contactussrb",
    name: "contactussrb",
    component: ContactUsView,
  },
  {
    path: "/contactuseng",
    name: "contactuseng",
    component: ContactUsViewEng,
  },
  {
    path: "/artistssrb",
    name: "artistssrb",
    component: ArtistsView,
  },
  {
    path: "/artistseng",
    name: "artistseng",
    component: ArtistsViewEng,
  },
  {
    path: "/myAccountsrb",
    name: "myAccountsrb",
    component: MyAccountView,
  },
  {
    path: "/myAccounteng",
    name: "myAccounteng",
    component: MyAccountViewEng,
  },
  {
    path: "/paintingssrb",
    name: "paintingssrb",
    component: PaintingsView,
  },
  {
    path: "/paintingseng",
    name: "paintingseng",
    component: PaintingsViewEng,
  },
  {
    path: "/sculpturessrb",
    name: "sculpturessrb",
    component: SculptureView,
  },
  {
    path: "/sculptureseng",
    name: "sculptureseng",
    component: SculptureViewEng,
  },
  {
    path: "/architecturesrb",
    name: "architecturesrb",
    component: ArchitectureView,
  },
  {
    path: "/architectureeng",
    name: "architectureeng",
    component: ArchitectureViewEng,
  },

  {
    name: "ArtworkDetailsView",
    path: "/artwork/:id",
    component: ArtworkDetailsView,
  },
  {
    name: "SearchResultView",
    path: "/searchsrb",
    component: SearchResultView,
  },
  {
    name: "SearchResultView",
    path: "/searcheng",
    component: SearchResultView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
