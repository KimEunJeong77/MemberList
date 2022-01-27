import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import MemberList from './MemberList'
export default createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path:'/',
            component:Home
        },
        {
            path:'/memberlist',
            component:MemberList
        }
    ]
})