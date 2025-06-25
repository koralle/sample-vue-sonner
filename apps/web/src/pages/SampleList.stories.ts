import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SampleList from './SampleList.vue';

const meta: Meta<typeof App> = {
  title: 'SampleList',
  component: SampleList,
};

export default meta;
type Story = StoryObj<typeof SampleList>;

export const Default: Story = {};
