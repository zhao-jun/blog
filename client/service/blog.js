import request from './xhr';

export const getBlogList = param => request('get', '/blog/list', param);

export const getBlogDetail = param => request('get', '/blog/detail', param);
