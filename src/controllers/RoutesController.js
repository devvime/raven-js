import Core from '../core/core.js'
import HomeController from '../controllers/HomeController.js'
import blog from '../components/blog/index.js'

const home = new HomeController()

class RoutesController extends Core {    

    async index() {        
        await home.index()
    }

    async blog() {
        await this.render(blog)
    }

}

export default RoutesController