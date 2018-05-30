import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',
      name: 'main',
      component: () =>
        import("@/pages/index.vue"),
      redirect:'',
      children:[
        {
          path: '/',
          name: 'home',
          component: () =>
            import("@/pages/home/index.vue"),
      }
      ]
    }
  ]
})
