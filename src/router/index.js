import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Page from  '@/components/pages/Page'
import Booklist from '@/components/pages/Booklist/Booklist.vue'
import listDetail from '@/components/pages/Booklist/listDetail/listDetail.vue'
import Channel from '@/components/pages/Channel/Channel.vue'
Vue.use(Router)

let router = new Router({
  model:'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/page',
      name:'page',
      component:Page,
      children:[
        {
          path:"booklist",
          name:'booklist',
          component:Booklist,
          children:[
            {
              path:"listdetail",
              name:'listdetail',
              component:listDetail,
              beforeEnter:((to,from,next)=>{
                if(!to.params.sid){
                  router.push({name:'booklist'})
                }else{
                  next()
                }
              })
            }
          ]
        },
        {
          path:'channel/:num',
          name:'channel',
          component:Channel
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
export default  router