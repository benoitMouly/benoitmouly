import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


const scrollBehavior = (to) => {
  if (to.hash) {
      return {selector: to.hash}
      //Or for Vue 3:
      //return {el: to.hash}
  } else {
      return { x: 0, y: 0 }
  }
}

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
    }
  },


  {
    path: '/portoflio',
    name: 'Portfolio',
    component: () => import('../components/Portfolio.vue'),
    meta: {
  
    }
    },

    {
  path: '/Hobbies',
  name: 'Hobbies',
  component: () => import('../components/Hobbies.vue'),
  meta: {

  }
  },
  {
  path: '/contact',
  name: 'contact',
  component: () => import('../components/Contact.vue'),
  meta: {

  }
  },
  {
  path: '/#competences',
  name: 'Competences',
  component: () => import('../components/Competences.vue'),
  meta: {

  }
  },
]
const router  =  new VueRouter({
  mode: "history",
  scrollBehavior,
routes});


Vue.use(VueRouter)
export default router