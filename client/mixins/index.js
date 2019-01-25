import Vue from 'vue';

const mixins = require.context('./', false, /\.js$/);

mixins.keys().forEach(i => {
  if (i === './index.js') return;
  Vue.mixin(mixins(i).default);
});
