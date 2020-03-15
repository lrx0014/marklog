import Vue from 'vue'
import Router from 'vue-router'
import Writer from '@/components/writer/Writer'
import Publisher from '@/components/publisher/Publisher'
import Article from '@/components/publisher/Article'
import Analyse from '@/components/publisher/Analyse'
import Setting from '@/components/setting/Setting'
import GeneralSetting from '@/components/setting/General'
import AccountSetting from '@/components/setting/Account'

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
      path: '/publisher',
      name: 'publisher',
      redirect: '/publisher/articles',
      components: {
        main: Publisher
      },
      children: [
        {
          path: 'articles',
          name: 'articles',
          component: Article
        },
        {
          path: 'analyse',
          name: 'analyse',
          component: Analyse
        }
      ]
    },
    {
      path: '/setting',
      name: 'setting',
      redirect: '/setting/general',
      components: {
        main: Setting
      },
      children: [
        {
          path: 'general',
          name: 'general',
          component: GeneralSetting
        },
        {
          path: 'account',
          name: 'account',
          component: AccountSetting
        }
      ]
    }
  ]
})
