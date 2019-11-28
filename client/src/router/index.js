import Vue from "vue";
import VueRouter from "vue-router";
import Hello from '@/components/HelloWorld'
import Register from "@/components/Register";

Vue.use(VueRouter);

const routes = [
        {
         path: '/',
         name:  'Hello',
         component: Hello
        },
        {
         path: '/register',
         name:  'register',
         component: Register
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
