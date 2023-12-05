import { createWebHistory, createRouter } from "vue-router"

//Layout
import DefaultLayout from "./layout/DefaultLayout.vue"
import FullLayout from "./layout/FullLayout.vue"

//Pages
import Main from "./pages/Index.vue"
import Login from "./pages/login/Login.vue"
import Register from "./pages/user/Register.vue"

const routes = [
  {
    path: "/",
    name: "Public",
    component: DefaultLayout,
    redirect: "/",
    children: [
      //메인
      {
        path: "/",
        name: "Main",
        component: Main,
      },
      //회원가입
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
  {
    path: "/",
    name: "FullPage",
    component: FullLayout,
    redirect: "/",
    children: [
      //로그인
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  //const publicPages = ["/login", "/register"]
  // const authRequired = !publicPages.includes(to.path)
  // const loggedIn = localStorage.getItem("user")

  // 로그인이 필요한 화면 + 로그인이 안된 상태인 경우 login페이지로 이동
  // if (authRequired && !loggedIn) {
  //   next("/login")
  // } else {
  //   next()
  // }

  //테스트 모든 페이지 접근 가능
  next()
})

export default router
