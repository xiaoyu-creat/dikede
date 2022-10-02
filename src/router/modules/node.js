import Layout from '@/layout'
export default {
  path: '/node',
  component: Layout,
  redirect: '/node/region',
  meta: { title: '点位管理', icon: 'el-icon-location-information' },
  children: [
    {
      path: '/node/region',
      name: 'node',
      component: () => import('@/views/node'),
      meta: { title: '区域管理' }
    },
    {
      path: '/node/node',
      name: 'node',
      component: () => import('@/views/node'),
      meta: { title: '点位管理' }
    },
    {
      path: '/node/partner',
      name: 'node',
      component: () => import('@/views/node'),
      meta: { title: '合作商管理' }
    }
  ]
}
