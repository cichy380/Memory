export default {
    /**
     * Shuffles array in place
     * @param {Array} arr - items An array containing the items
     * @source https://stackoverflow.com/a/6274381/1842159
     */
    shuffle: (arr) => {
        for (let i=arr.length-1; i>0; i-=1) {
            const j = Math.floor(Math.random()*(i+1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    /**
     * Clones a javascript ES6 class instance
     * @param {Object} obj - ES6 class object
     * @source https://stackoverflow.com/a/44782052/1842159
     */
    cloneObject: (obj) => {
        return Object.assign( Object.create( Object.getPrototypeOf(obj)), obj)
    },

}
