import Core from '../core/core.js'
import HomeController from '../controllers/HomeController.js'
import blog from '../components/blog/index.js'

const home = new HomeController()

class RoutesController extends Core {    

    index() {        
        home.index()       
    }

    blog() {
        this.render(blog)
    }

}

export default RoutesController