import './dependences/index.js'
import Route from './core/route.js'

var routes = [
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

Route(routes)