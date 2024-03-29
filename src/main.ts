import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBell,
  faCog,
  faComment,
  faSearch,
  faTachometerAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'

library.add(faSearch, faTachometerAlt, faUser, faBell, faComment, faCog)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
