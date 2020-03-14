import Vue from 'vue'
import Router from 'vue-router'
import AsideTree from '@/components/tree/AsideTree'
import MDEditor from '@/components/editor/MDEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/write',
      name: 'AsideTree',
      components: {
        aside: AsideTree,
        main: MDEditor
      }
    }
  ]
})
