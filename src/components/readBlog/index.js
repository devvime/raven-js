import Core from '../../core/core.js'

const component = (data) => {
    return (
        /*html*/
        `<div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="display-1">Blog</h1>
                    <p>${data}</p>
                </div>
            </div>
        </div>`
    )
}

function readBlog(data) {
    Core.render(component(data))
}

export default readBlog