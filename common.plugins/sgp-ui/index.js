import Vue from 'vue'
import Element from '@rdc/sgp-ui'
import locale from '@rdc/sgp-ui/lib/locale/lang/zh-CN'

// 公用组件开发阶段引入位置 提炼成熟后加入sgp-ui

const components = [
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.use(component);
  });
};

export default () => {
  Vue.use(Element, { size: 'small', locale })

  install(Vue);
}
