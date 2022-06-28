import { createRouter, createWebHistory } from "vue-router";
import FavoritosView from "../views/FavoritosView.vue";
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
			component: FavoritosView,
		},
	],
});

export default router;
