import Core from '../core/core.js'
import home from '../components/home/index.js'
import blog from '../components/blog/index.js'

class RoutesController extends Core {

    index() {
        $.get(window.apiURL)
        .then((response) => {
            this.render(home(response.title)) 
        })       
    }

    blog() {
        this.render(blog)
    }

}

export default RoutesController