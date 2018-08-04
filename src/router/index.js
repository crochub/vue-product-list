import Vue from 'vue'
import Router from 'vue-router'

import ProductList from '@/pages/list'
import ProductCreate from '@/pages/create'
import ProductUpdate from '@/pages/update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductList,
    },
    {
      path: '/create',
      name: 'product.create',
      component: ProductCreate,
    },
    {
      path: '/update/:id',
      name: 'product.update',
      props: true,
      component: ProductUpdate,
    },
    {
      path: '*',
      name: 'notFound',
      redirect: '/',
    },
  ],
})
