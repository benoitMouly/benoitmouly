import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronUp)
library.add(faChevronDown)



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueFullPage);




new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')