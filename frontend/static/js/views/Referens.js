import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Referens");
    }

    async getHtml() {
        return `
            <h1>Referens</h1>
            <p>
                Manage your privacy and configuration.
            </p>
            <p>
                <a href="/" data-link>Back to: Wilangello </a>
            </p>
        `;
    }
}