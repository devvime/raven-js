import RoutesController from '../controllers/RoutesController.js'
const road = new RoutesController

function route(param, callback) {

    var getRoute = window.baseURL + param
    var action = 'road.' + callback + '()'

    if(window.location.href === getRoute) {
        eval(action)
    }
    
}

export default route