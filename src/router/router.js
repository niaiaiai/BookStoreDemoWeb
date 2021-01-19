var routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../components/Layout'),
        children: [
            {
                path: '/order',
                name: 'order',
                component: () => import('../views/order/Order'),
            },
            {
                path: '/book',
                name: 'book',
                component: () => import('../views/book/Book'),
            },
            {
                path: '/price',
                name: 'price',
                component: () => import('../views/price/Price'),
            },
            {
                path: '/invoice',
                name: 'invoice',
                component: () => import('../views/invoice/Invoice'),
            },
        ]
    }
]
export default routes