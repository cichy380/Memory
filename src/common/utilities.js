export default {
    /**
     * Shuffles array in place
     * @param {Array} array items An array containing the items
     * @source https://stackoverflow.com/a/6274381/1842159
     */
    shuffle: (array) => {
        for (let i=array.length-1; i>0; i-=1) {
            const j = Math.floor(Math.random()*(i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
