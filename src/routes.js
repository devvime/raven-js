const routes = [
    //Routes
    {
        path: '/',
        action: 'index'
    },
    {
        path: '/blog',
        action: 'blog'
    },
    {
        path: '/blog/$id',
        action: 'readBlog'
    }
]

export default routes