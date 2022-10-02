import Layout from '@/layout'
export default {
  path: '/user',
  component: Layout,
  redirect: '/vm/index',
  meta: { title: '人员管理', icon: 'el-icon-user' },
  children: [
    {
      path: '/user/index',
      name: 'user',
      component: () => import('@/views/user'),
      meta: { title: '人员列表' }
    },
    {
      path: '/user/user-task-stats',
      name: 'user',
      component: () => import('@/views/user'),
      meta: { title: '人效统计' }
    },
    {
      path: '/user/user-work',
      name: 'user',
      component: () => import('@/views/user'),
      meta: { title: '工作量列表' }
    }
  ]
}
