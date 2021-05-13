import Core from '../core/core.js'
import notFound from '../components/notFound/404.js'
import HomeController from '../controllers/HomeController.js'
import blog from '../components/blog/index.js'
import readBlog from '../components/readBlog/index.js'

class RoutesController extends Core {

    static index() {
        HomeController.index()
    }

    static blog() {
        this.render(blog)
    }

    static readBlog(data) {
        this.render(readBlog(data))
    }

    static notFound() {
        this.render(notFound)
    }

}

export default RoutesController