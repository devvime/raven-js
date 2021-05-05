import Core from '../core/core.js'

class RoutesController extends Core {

    index() {
        this.render('home')
    }

    salve() {
        this.render('salve')
    }

}

export default RoutesController