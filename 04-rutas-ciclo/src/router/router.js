// despues de instalar vue router podemos hacer uso de los siguientes tipos para crear las rutas
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        // esta es la forma en que implementamos lazyload en vue router
        // el valor de webpackChunkName es opcional y nos permite definir el nombre del chunk en la carga
        // solo funciona en el router
        /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage.vue"
      ),
  },
  {
    path: "/pokemon/:pokemonId",
    name: "pokemonId",
    component: () =>
      import(
        /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage.vue"
      ),
    props: (route) => {
      const id = Number(route.params.pokemonId);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  {
    // esta es la implementacion de una pagina por defecto en la lista de rutas
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NoPageFound" */ "@/modules/shared/pages/NoPageFound.vue"
      ),
    // redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
