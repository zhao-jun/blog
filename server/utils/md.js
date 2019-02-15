// 0.5.2 版本存在解析问题，目前暂用 0.3.19
const marked = require('marked');
const hljs = require('highlight.js');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  langPrefix: 'hljs ',
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
  // 解决换行问题
  // highlight: function(code) {
  //   // return `<ul>${hljs
  //   //   .highlightAuto(code)
  //   //   .value.split('\n')
  //   //   .map(i => `<li>${i}</li>`)
  //   //   .join('')}</ul>`;
  //   return `${hljs
  //     .highlightAuto(code)
  //     .value.split('\n')
  //     .join('<br />')}`;
  // }
});

module.exports = marked;
