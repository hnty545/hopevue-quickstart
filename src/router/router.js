import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const home = r =>
  require.ensure([], () => r(require('../views/base/home/index.vue')), 'home');

export function createRouter() {
  const router = new VueRouter({
    // base: '/shzs/',
    // mode: 'history',
    strict: process.env.CUSTOM_PARAMS.DEBUG,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.keepAlive) {
          from.meta.savedPosition = document.body.scrollTop;
        }
        return { x: 0, y: to.meta.savedPosition || 0 };
      }
    },
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: home
      }
    ]
  });

  router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.matched.length === 0) {
      // 如果未匹配到路由
      // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
      if (from.name) {
        next({ name: from.name });
      } else {
        next('/');
      }
    } else {
      // 动态改变titile
      if (to.meta.title) {
        document.title = to.meta.title;
      }
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      if (toDepth > fromDepth) {
        //前进
        from.meta.keepAlive = true;
        to.meta.keepAlive = false;
      } else if (toDepth === fromDepth) {
        from.meta.keepAlive = false;
        to.meta.keepAlive = false;
      } else {
        //返回
        from.meta.keepAlive = false;
        to.meta.keepAlive = true;
      }
      next(); // 如果匹配到正确跳转
    }
  });
  router.afterEach(route => {
    NProgress.done();
  });

  return router;
}

export const syncStore = (store, router) => {
  // done. Returns an unsync callback fn
  // const unsync =
  sync(store, router); //, { moduleName: 'RouteModule' })
  // store.state.route.path   // current path (string)
  // store.state.route.params // current params (object)
  // store.state.route.query  // current query (object)
  // During app/Vue teardown (e.g., you only use Vue.js in a portion of your app and you
  // navigate away from that portion and want to release/destroy Vue components/resources)
  // unsync() // Unsyncs store from router
};
