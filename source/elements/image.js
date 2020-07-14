import { Component } from '../../references/quantum.js';

export class Image extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-image');

    static attributes = [];
}

customElement.define('quantum-image', Image);