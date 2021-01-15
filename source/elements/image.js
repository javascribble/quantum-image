import html from '../templates/image.js';

export class Image extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-image', Image);