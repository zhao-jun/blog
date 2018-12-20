const modules = require.context('./', true, /\.js$/);
let obj = {};
modules.keys().forEach(i => {
  if (i.includes('index.js')) return;
  obj[/[A-Za-z]+(\/[A-Za-z]+)?/.exec(i)[0]] = modules(i).default;
});
export default obj;
