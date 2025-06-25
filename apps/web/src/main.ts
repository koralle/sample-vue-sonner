import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import SampleList from './pages/SampleList.vue'
import SampleDetail from './pages/SampleDetail.vue'

const routes = [
  { path: '/', redirect: '/sample' },
  { path: '/sample', component: SampleList },
  { path: '/sample/:id', component: SampleDetail },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
