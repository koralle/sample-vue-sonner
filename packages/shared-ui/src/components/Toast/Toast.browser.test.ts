import { render } from 'vitest-browser-vue'
import * as ToastStories from './Toast.stories'

import { composeStories} from '@storybook/vue3-vite'

const composedStories = composeStories(ToastStories)
import { page } from '@vitest/browser/context'


describe("Toast", () => {
  describe("Default", () => {
    const { Default } = composedStories

    test("should render", async () => {
      render(Default)

      const toast = page.getByRole('heading', { name: 'Toast' })

      await expect.element(toast).toBeVisible()
    })
  })
})
