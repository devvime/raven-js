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
    }
]

export default routes