class Core {

    render(component) {
        $("#root").load("src/components/" + component + ".html")
    }

    include(target, component) {
        $(target).load("src/components/" + component + ".html")
    }

}

export default Core