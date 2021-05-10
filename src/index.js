import './dependences/index.js'
import route from './core/route.js'

const routes = [
    { get: '/', action: 'index' },
    { get: '/blog', action: 'blog' },
    { get: '/blog/$id', action: 'readBlog' }
]

route(routes)

// route('/', 'index')
// route('/blog', 'blog')
// route('/blog/$id', 'readBlog')