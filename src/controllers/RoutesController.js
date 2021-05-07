import Core from '../core/core.js'
import notFound from '../components/notFound/404.js'
import HomeController from '../controllers/HomeController.js'
import blog from '../components/blog/index.js'
import readBlog from '../components/readBlog/index.js'

const home = new HomeController()

class RoutesController extends Core {    

    async index() {        
        await home.index()
    }

    async blog() {
        await this.render(blog)
    }

    async readBlog(data) {
        await this.render(readBlog(data))
    }

    async notFound() {
        await this.render(notFound)
    }

}

export default RoutesController