import Core from '../core/core.js'
import home from '../components/home/index.js'

class HomeController extends Core {

    async index() {
        
        var data = [
            {
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80'
            },
            {
                image: 'https://images.unsplash.com/photo-1592169813474-dd0c8e52e3bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            {
                image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80'
            }
        ]

        await this.render(home(data))

        await data.map((value)=>{
                $("#loop").append(`
                    <div class="col-md-4 anime" data-delay="400">
                        <img width="100%" src="${value.image}">
                    </div>
                `)
            })
    }

}

export default HomeController