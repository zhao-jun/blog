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
      title: '个人日志',
      category: '0'
    }
  },
  fe: {
    path: '/fe',
    component: () => import('../views/blog/list'),
    name: 'fe',
    meta: {
      title: '前端',
      category: '1'
    }
  },
  nodejs: {
    path: '/nodejs',
    component: () => import('../views/blog/list'),
    name: 'nodejs',
    meta: {
      title: 'Node.js',
      category: '2'
    }
  },
  other: {
    path: '/other',
    component: () => import('../views/blog/list'),
    name: 'other',
    meta: {
      title: '其他',
      category: '9'
    }
  },
  utils: {
    path: '/utils',
    component: () => import('../views/utils'),
    name: 'utils',
    meta: {
      title: 'utils'
    },
    children: [
      {
        path: 'test',
        component: () => import('../views/utils/loading')
      }
    ]
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
