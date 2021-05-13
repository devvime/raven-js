const readBlog = (data) => {

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

export default readBlog