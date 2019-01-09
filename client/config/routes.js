const routes = {
  test: {
    path: '/test/:id?',
    component: () => import('../views/test.vue'),
    name: 'test',
    meta: {
      title: 'test'
    }
  },
  // 首页路由分开写因为title展示不同
  home: {
    path: '/',
    component: () => import('../views/blog/list'),
    name: 'home',
    meta: {
      title: 'home'
    }
  },
  fe: {
    path: '/fe',
    component: () => import('../views/blog/list'),
    name: 'fe',
    meta: {
      title: 'FE',
      category: 1
    }
  },
  nodejs: {
    path: '/nodejs',
    component: () => import('../views/blog/list'),
    name: 'nodejs',
    meta: {
      title: 'Node.js',
      category: 2
    }
  },
  other: {
    path: '/other',
    component: () => import('../views/blog/list'),
    name: 'other',
    meta: {
      title: 'other',
      category: 9
    }
  },
  utils: {
    path: '/utils',
    component: () => import('../views/blog/list'),
    name: 'utils',
    meta: {
      title: 'utils'
    }
  },
  blogDetail: {
    path: '/blog/detail/:id',
    pushPath: '/blog/detail',
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
