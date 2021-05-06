import Core from '../core/core.js'
import home from '../components/home/index.js'

class HomeController extends Core {

    index() {
        var data = [
            {
                name: 'Victor',
                email: 'v@v.com'
            },
            {
                name: 'Guth',
                email: 'gu@gu.com'
            },
            {
                name: 'Guizão',
                email: 'gui@gui.com'
            }
        ]
        this.render(home(data))
    }

}

export default HomeController