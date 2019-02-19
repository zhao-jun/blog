export const Config = {
  baseURL:
    process.env.VUE_ENV === 'server'
      ? // 客户端渲染直接使用 /backend 即可
        // 服务端渲染没有代理，所以不能写 /backend
        'http://localhost:3030/backend'
      : '/backend'
};
