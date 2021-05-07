import RoutesController from '../controllers/RoutesController.js'
const road = new RoutesController

async function route(param, callback) {        

    var setRoute = window.baseURL + param
    var action = 'road.' + callback + '()'

    var paramiter = param.split("$")
    var newRoute = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)

    if (paramiter[1] != undefined) {
        setRoute = window.baseURL + paramiter[0] + newRoute
        action = 'road.' + callback + '(newRoute)'
    }

    if(window.location.href === setRoute) {
        await eval(action)
    }
    
}

export default route