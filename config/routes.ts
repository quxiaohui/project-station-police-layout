export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },


  {
    path: '/floor',
    name: 'floor',
    icon: 'table',
    component: './Floor',
  },
  {
    path: '/police',
    name: 'police',
    icon: 'smile',
    access: 'canAdmin',
    routes: [
      {
        path: '/police/type',
        name: 'type',
        icon: 'smile',
        component: './PoliceForce/PoliceType',
      },{
        path: '/police/deployment',
        name: 'deployment',
        icon: 'smile',
        component: './PoliceForce/PoliceDeployment',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/resources',
    name: 'resources',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/resources/type',
        name: 'type',
        icon: 'smile',
        component: './Resources/ResourcesType',
      },{
        path: '/resources/deployment',
        name: 'deployment',
        icon: 'smile',
        component: './Resources/ResourcesDeployment',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/floor',
  },
  {
    component: './404',
  },
];
