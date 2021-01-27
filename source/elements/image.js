import html from '../templates/image.js';

const { Component, template, define } = quantum;

export class Image extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-image', Image);