import Layout from '@/layout'
export default {
  path: '/report/index',
  component: Layout,
  children: [
    {
      path: '',
      name: 'report',
      component: () => import('@/views/report'),
      meta: { title: '对账统计', icon: 'el-icon-collection' }
    }
  ]
}
