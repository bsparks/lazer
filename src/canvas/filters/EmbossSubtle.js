import Convolve from './Convolve.js';

export default function EmbossSubtle (imageData) {

    return Convolve(imageData, [ 1, 1, -1, 1, 3, -1, 1, -1, -1 ]);

}
