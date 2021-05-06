class Core {

    async render(component) {
        await $("#root").html(component)
    }
    
    async include(target, component) {
        await $(target).html(component)
    }

}

export default Core