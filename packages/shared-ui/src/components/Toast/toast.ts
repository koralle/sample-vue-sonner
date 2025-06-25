import { toast as _toast } from 'vue-sonner';
import { markRaw, h } from 'vue'
import ToastBody from './ToastBody.vue'

export const successToast = (title: string, description: string) => {
  _toast.custom(markRaw(ToastBody), { componentProps: { title, description } })
}
