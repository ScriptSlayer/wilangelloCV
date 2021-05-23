import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Wilangello");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Wil</h1>
            <p>
                Fugiat voluptatet nisi Lorem cillum 
                anim sit do eiusmod occaecat irure do.
                Reprehenderit anim fugiat sint exercitation consequat. 
                Sit anim laborum sit amet. Lorem adispisicing ullamco duis.
                Animin domagna ca pariatur et.
            </p>
            <p>
                <a href="/personligbrev " data-link>View recent posts</a>
            </p>
        `;
    }
}