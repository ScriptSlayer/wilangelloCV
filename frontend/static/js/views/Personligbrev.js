import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Personligbrev");
    }

    async getHtml() {
        return `
            <h1>Personligbrev</h1>
            <p>
                You are viewing the posts
            </p>
        `;
    }
}