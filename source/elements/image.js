import html from '../templates/image.js';

export class Image extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-image', Image);