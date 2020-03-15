import Vue from 'vue'
import Router from 'vue-router'
import Writer from '@/components/writer/Writer'
import Publisher from '@/components/publisher/Publisher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: Writer
      }
    },
    {
      path: '/writer',
      name: 'writer',
      components: {
        main: Writer
      }
    },
    {
      path: '/publish',
      name: 'publisher',
      components: {
        main: Publisher
      }
    }
  ]
})
