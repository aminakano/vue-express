import Vue from "vue";
import VueRouter from "vue-router";
import Hello from '@/components/HelloWorld'
import Register from "@/components/Register";
import Login from "@/components/Login";

Vue.use(VueRouter);

const routes = [
        {
         path: '/',
         name:  'root',
         component: Hello
        },
        {
         path: '/register',
         name:  'register',
         component: Register
        },
        {
         path: '/login',
         name:  'login',
         component: Login
        }
    ];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;

// export default new VueRouter({
//     routes: [
//         {
//          path: '/',
//          name:  'Hello',
//          component: Hello
//         },
//         {
//          path: '/register',
//          name:  'register',
//          component: Register
//         }
//     ]
// })
