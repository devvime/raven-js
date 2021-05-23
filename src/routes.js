import blog from './components/blog/index.js'
import readBlog from './components/readBlog/index.js'

const routes = [
    //Routes
    {
        path: '/blog',
        component: blog
    },
    {
        path: '/blog/$id',
        component: readBlog
    },
    {
        path: '/blog/$id/$name',
        component: readBlog
    },
    {
        path: '/blog/$id/$name/$email',
        component: readBlog
    },
    {
        path: '/blog/$id/$name/$email/$pass',
        component: readBlog
    }
]

export default routes