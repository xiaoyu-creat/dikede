import Layout from '@/layout'
export default {
  path: '/vm',
  component: Layout,
  redirect: '/vm/index',
  meta: { title: '设备管理', icon: 'el-icon-data-analysis' },
  children: [
    {
      path: '/vm/index',
      name: 'vm',
      component: () => import('@/views/vm'),
      meta: { title: '设备管理', icon: 'tree-table' }
    },
    {
      path: '/vm/status',
      name: 'vm',
      component: () => import('@/views/vm'),
      meta: { title: '设备状态', icon: 'tree-table' }
    },
    {
      path: '/vm/type',
      name: 'vm',
      component: () => import('@/views/vm'),
      meta: { title: '设备类型管理', icon: 'tree-table' }
    }
  ]
}
