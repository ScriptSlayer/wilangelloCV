import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Utbildning");
    }

    async getHtml() {
        return `
            <h1>Utbildning</h1>
            <p>
                Manage your privacy and configuration.
            </p>
            <p>
                <a href="/" data-link>Back to: Wilangello </a>
            </p>
        `;
    }
}