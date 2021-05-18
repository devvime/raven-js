import index from '../components/index/index.js'
import notFound from '../components/notFound/404.js'

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

        var getParam = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)

        if (currentPath === '/') {
            $("#root").html(index)
        } else {
            var route = firstRouter.routes.filter(function(r) {

                if (r.path.indexOf("$")) {
                    var param = r.path.split("$")

                    if (param[1] != undefined) {
                        r.path = param[0] + getParam
                    }
                }

                return r.path === currentPath
            })[0]

            if (route) {
                $("#root").html(route.component(getParam))
            } else {
                $("#root").html(notFound)
            }
        }


    }

}

export default Route