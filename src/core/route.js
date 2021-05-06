import RoutesController from '../controllers/RoutesController.js'
const road = new RoutesController

async function route(param, callback) {

    var getRoute = window.baseURL + param
    var action = 'road.' + callback + '()'

    if(window.location.href === getRoute) {
        await eval(action)
    }
    
}

export default route