import RoutesController from "../controllers/RoutesController.js"

async function Route(routes) {

    window.onload = () => {

        var Router = function(name, routes) {
            return {
                name: name,
                routes: routes
            }
        }

        var firstRouter = new Router('Router', routes)

        var currentPath = window.location.pathname

        var setAction = ''
        var getParam = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)

        if (currentPath === '/') {
            RoutesController.index()
        } else {
            var route = firstRouter.routes.filter(function(r) {

                if (r.path.indexOf("$")) {
                    var param = r.path.split("$")

                    if (param[1] != undefined) {
                        r.path = param[0] + getParam
                        setAction = 'RoutesController.' + r.action + '(getParam)'
                    }
                } else {
                    setAction = 'RoutesController.' + r.action + '()'
                }

                return r.path === currentPath
            })[0]

            if (route) {
                eval(setAction)
            } else {
                RoutesController.notFound()
            }
        }


    }

}

export default Route