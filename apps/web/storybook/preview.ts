import { setup, type Preview } from '@storybook/vue3-vite';
import './styles.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import SampleList from '../src/pages/SampleList.vue'
import SampleDetail from '../src/pages/SampleDetail.vue'

const routes = [
  { path: '/', component: SampleList },
  { path: '/:id', component: SampleDetail },
]

setup((app) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  app.use(router)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;
