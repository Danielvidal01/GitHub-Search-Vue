import Vue from 'vue';
import Router from 'vue-router'
import Home from '../Views/Home'
import Detail from '../Views/Detail'

Vue.use(Router)

const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },{
        name:'detail',
        path:'/detail',
        component:Detail
    }
]

const router = new Router({ routes })

export default router;