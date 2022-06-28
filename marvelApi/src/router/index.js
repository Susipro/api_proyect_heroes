import { createRouter, createWebHistory } from "vue-router";
import FavoritosViewVue from "../views/FavoritosView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/Favoritos",
			name: "Favoritos",

			// route level code-splitting
			// this generates a separate chunk (Favoritos.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/FavoritosView.vue"),
		},
	],
});

export default router;
