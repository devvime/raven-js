import RoutesController from '../controllers/RoutesController.js'
const road = new RoutesController

// async function route(param, callback) {        

//     var setRoute = window.baseURL + param
//     var action = 'road.' + callback + '()'

//     var paramiter = param.split("$")
//     var newParam = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)

//     if (paramiter[1] != undefined) {
//         setRoute = window.baseURL + paramiter[0] + newParam
//         action = 'road.' + callback + '(newParam)'
//     }

//     if(window.location.href === setRoute) {
//         await eval(action)
//     }    
// }

async function route(routes) {

    routes.forEach(route => {
        var setRoute = window.baseURL + route.get
        var action = 'road.' + route.action + '()'

        var paramiter = route.get.split("$")
        var newParam = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)

        if (paramiter[1] != undefined) {
            setRoute = window.baseURL + paramiter[0] + newParam
            action = 'road.' + route.action + '(newParam)'
        }

        if (window.location.href === setRoute) {
            eval(action)
        }
    })
}

export default route