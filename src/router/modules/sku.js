import Layout from '@/layout'
export default {
  path: '/sku',
  component: Layout,
  redirect: '/sku/sku-class',
  meta: { title: '商品管理', icon: 'el-icon-printer' },
  children: [
    {
      path: '/sku/sku-class',
      name: 'sku',
      component: () => import('@/views/sku'),
      meta: { title: '商品类型', icon: 'tree-table' }
    },
    {
      path: '/sku/sku',
      name: 'sku',
      component: () => import('@/views/sku'),
      meta: { title: '商品管理', icon: 'tree-table' }
    }
  ]
}
