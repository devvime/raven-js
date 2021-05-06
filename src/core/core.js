class Core {

    render(component) {
        $("#root").html(component)
    }
    
    include(target, component) {
        $(target).html(component)
    }

}

export default Core