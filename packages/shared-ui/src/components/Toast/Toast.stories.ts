import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Toast from './Toast.vue';
import { toast } from 'vue-sonner';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    return {
      components: { Toast },
      setup() {
        const handleClick = () => toast.success('ご飯できたよ！', { description: '今日のご飯は唐揚げ丼だよ。'})
        return {
          handleClick
        }
      },
      template: `
        <Toast />
        <button @click="handleClick" class="bg-blue-900 text-white p-2 rounded-[6px] font-700">
          むぎちゃを起こす
        </button>
      `
    }
  }
};
