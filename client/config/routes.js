const routes = {
  test: {
    path: '/test/:id?',
    component: () => import('../views/test.vue'),
    name: 'test',
    meta: {
      title: 'test'
    }
  },
  home: {
    path: '/',
    component: () => import('../views/blog/list'),
    name: 'home',
    meta: {
      title: 'home'
    }
  },
  blogList: {
    path: '/blog/list',
    component: () => import('../views/blog/list'),
    name: 'blogList',
    meta: {
      title: 'home'
    }
  },
  blogDetail: {
    path: '/blog/detail',
    component: () => import('../views/blog/detail'),
    name: 'blog',
    meta: {
      title: 'blog'
    }
  },
  '404': {
    path: '/404',
    component: () => import('../views/not-found.vue'),
    name: '404',
    meta: {
      title: '404'
    }
  },
  redirect: {
    path: '*',
    redirect: '/'
  }
};

export default routes;
