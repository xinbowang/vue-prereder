

const ROUTES = [
    {
        path: '/',
        component: 'Layout',
        children: [
            {
                name: 'Home',
                path: '/',
                component: 'Index',
                isStatic: true,
            },
            {
                path: '/list',
                name: 'List',
                component: 'List',
                isStatic: true,
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: 'About',
        isStatic: true,
    },
    {
        path: '*',
        redirect: '/'
    }
];

module.exports = ROUTES;