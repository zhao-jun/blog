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
      title: '阿夸漫谈',
      category: '0'
    }
  },
  fe: {
    path: '/fe',
    component: () => import('../views/blog/list'),
    name: 'fe',
    meta: {
      title: '前端 - 阿夸漫谈',
      category: '1'
    }
  },
  nodejs: {
    path: '/nodejs',
    component: () => import('../views/blog/list'),
    name: 'nodejs',
    meta: {
      title: 'Node.js - 阿夸漫谈',
      category: '2'
    }
  },
  css: {
    path: '/css',
    component: () => import('../views/css/index'),
    name: 'css',
    children: [
      {
        path: '',
        component: () => import('../components/css/intro'),
        meta: {
          title: 'css - 阿夸漫谈'
        }
      },
      {
        path: 'centering',
        component: () => import('../components/css/layout/centering'),
        meta: {
          title: '垂直水平居中 - 阿夸漫谈'
        }
      },
      {
        path: 'waterfall',
        component: () => import('../components/css/layout/waterfall'),
        meta: {
          title: '瀑布流布局 - 阿夸漫谈'
        }
      },
      {
        path: 'anchor',
        component: () => import('../components/css/other/anchor'),
        meta: {
          title: '锚点置顶 - 阿夸漫谈'
        }
      }
    ]
  },
  other: {
    path: '/other',
    component: () => import('../views/blog/list'),
    name: 'other',
    meta: {
      title: '其他 - 阿夸漫谈',
      category: '9'
    }
  },
  about: {
    path: '/about',
    component: () => import('../views/about'),
    name: 'about',
    meta: {
      title: '关于 - 阿夸漫谈'
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
    path: '/blog/detail/:code',
    pushPath: '/blog/detail',
    component: () => import('../views/blog/detail'),
    name: 'blog',
    meta: {
      // title: 'blog',
      notKeepAlive: true
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
