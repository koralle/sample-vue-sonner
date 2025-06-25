import { render } from 'vitest-browser-vue'
import * as AppStories from './App.stories'

import { composeStories} from '@storybook/vue3-vite'
const composedStories = composeStories(AppStories)
import { page, userEvent } from '@vitest/browser/context'


describe("Toast", () => {
  describe("Default", () => {
    const { Default } = composedStories

    test("should render", async () => {
      render(Default)

      const button = page.getByRole('button', { name: '起こす' })
      await expect.element(button).toBeVisible()

      await userEvent.click(button)

      const toast = page.getByText('ご飯できたよ')
      await expect.element(toast).toBeVisible()
    })
  })
})
