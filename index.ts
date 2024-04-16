import { createApp, ref, h } from 'vue';
import Loading from './Loading.vue';

let loadingInstance: any = null;

function initInstance() {
  // 生成挂载dom
  const container = document.createElement('div');
  container.id = 'loading';
  document.body.appendChild(container);

  const app = createApp({
    setup() {
      const loadingRef = ref({
        show: true,
        text: '加载中'
      });

      return {
        loadingRef
      };
    },
    render() {
      return h(Loading, {
        show: this.loadingRef.show,
        text: this.loadingRef.text
      });
    }
  });
  loadingInstance = app.mount('#loading');
}

function show(text?: string) {
  if (!loadingInstance) {
    initInstance();
  }
  loadingInstance.loadingRef.show = true;
  loadingInstance.loadingRef.text = text;
}

function hide() {
  if (loadingInstance) {
    loadingInstance.loadingRef.show = false;
  }
}

export default {
  show,
  hide
};
