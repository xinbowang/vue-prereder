import Vue from 'vue'
import VueRouter from 'vue-router'
import * as views from './views';
import ROUTES from './router.config';

Vue.use(VueRouter)

const renderRoutes = (rs = []) => {
  rs.forEach(elem => {
    if (elem.component) elem.component = views[elem.component];
    if (elem.children) renderRoutes(elem.children);
  });
};

renderRoutes(ROUTES);
console.log(ROUTES)

const routes = ROUTES;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
