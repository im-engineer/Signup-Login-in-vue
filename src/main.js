import createApp from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'
import Signup from './components/Signup'
import Login from './components/Login'

// createApp.use(Vuerouter);
const routes = [
    {path:'/', components:Login },
    {path:'/signup', components:Signup}
]

const router = new Vuerouter ({
    routes
})

// new Vue({
//     router:router,
//     render: h => h(App),
// }).$mount('#app')
createApp({
    router:router,
   render:h => h(App)
}).$mount('#app')
