import { Component, template } from '../../references/quantum.js';
import html from '../templates/image.js';

export class Image extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-image', Image);