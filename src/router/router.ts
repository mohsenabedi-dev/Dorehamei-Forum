import {createRouter, createWebHistory} from "vue-router"
import NProgress from "nprogress"

NProgress.configure({ easing: 'ease', speed: 1000 });

const Home = () => import("@/views/home.vue")
const routes = [
  {path:"/", component:Home}
]


const router = createRouter({
  history:createWebHistory(),
  routes
})

router.beforeEach((to, from)=>{
  NProgress.start()
  return true
})

router.afterEach((to)=>{
  NProgress.done()
})

export default router