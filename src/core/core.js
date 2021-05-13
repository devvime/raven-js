class Core {

    static render(component) {
        $("#root").html(component)
    }

    static include(target, component) {
        $(target).html(component)
    }

}

export default Core