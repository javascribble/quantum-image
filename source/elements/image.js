import { Quantum, define } from '../../references/quantum.js';
import { image } from '../templates/image.js';

export class Image extends Quantum {
    constructor() {
        super(image);
    }
}

define(Image);