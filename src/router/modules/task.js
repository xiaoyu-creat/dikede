import Layout from '@/layout'
export default {
  path: '/task',
  component: Layout,
  redirect: '/sku/sku-class',
  meta: { title: '工单管理', icon: 'el-icon-tickets' },
  children: [
    {
      path: '/task/business',
      name: 'task',
      component: () => import('@/views/task'),
      meta: { title: '运营工单', icon: 'tree-table' }
    },
    {
      path: '/task/operation',
      name: 'task',
      component: () => import('@/views/task'),
      meta: { title: '运维工单', icon: 'tree-table' }
    }
  ]
}
