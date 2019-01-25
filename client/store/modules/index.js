const modules = require.context('./', true, /\.js$/);
let obj = {};
modules.keys().forEach(i => {
  if (i.includes('index.js')) return;
  // 驼峰命名
  obj[
    /[A-Za-z-]+(\/[A-Za-z-]+)?/
      .exec(i)[0]
      .split('-')
      .map((i, index) => {
        if (index == 0) return i;
        return i.slice(0, 1).toUpperCase() + i.slice(1);
      })
      .join('')
  ] = modules(i).default;
});
export default obj;
