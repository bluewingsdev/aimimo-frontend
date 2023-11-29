import { createWebHistory, createRouter } from "vue-router"
import Main from "./components/Index.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
import Sample from "./components/Sample.vue"
// lazy-loaded
// const Profile = () => import("./components/Profile.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
// const BoardModerator = () => import("./components/BoardModerator.vue")
// const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
  //메인
  {
    path: "/",
    component: Main,
  },
  //로그인
  {
    path: "/login",
    component: Login,
  },
  //회원가입
  {
    path: "/register",
    component: Register,
  },
  //샘플
  {
    path: "/sample",
    component: Sample,
  },
  //   ,
  //   {
  //     path: "/profile",
  //     name: "profile",
  //     // lazy-loaded
  //     component: Profile,
  //   },
  //   {
  //     path: "/admin",
  //     name: "admin",
  //     // lazy-loaded
  //     component: BoardAdmin,
  //   },
  //   {
  //     path: "/mod",
  //     name: "moderator",
  //     // lazy-loaded
  //     component: BoardModerator,
  //   },
  //   {
  //     path: "/user",
  //     name: "user",
  //     // lazy-loaded
  //     component: BoardUser,
  //   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/sample"]
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem("user")

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login")
  } else {
    next()
  }
})

export default router