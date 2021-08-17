import Vue from "vue";
import VueRouter from "vue-router"
import calculator from "@/components/Calculator"

Vue.use( VueRouter )

const router = new VueRouter( {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: calculator
        }
    ]
} )
export default router