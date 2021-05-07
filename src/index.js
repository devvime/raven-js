import './dependences/index.js'
import route from './core/route.js'

route('/','index')
route('/blog','blog')
route('/blog/$id','readBlog')
