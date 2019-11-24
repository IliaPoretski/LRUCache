class LRUCache {
    /**
     * Implementation of "Least-Recentrly Used" (LRU) Cache.
     * 
     * @param {number} max_size The maximum size of the cache.
     * @param {Object} chache A Map object holding key-value pairs in insertion order.
     */
    constructor(max_size) {
        this.max_size = max_size;
        this.cache = new Map();
    }

    /**
     * Add a key-value pair to the cache.
     * 
     * If the size of the cache exceed max cache size, remove least recently used 
     * key-value pair. If the key already exists, update the value.
     * 
     * @param {*} key Key of new insertion.
     * @param {*} value Value of new insertion.
     */
    put(key, value) {

        if (this.cache.has(key)) {
            /*
             * If the key-value pair exists in the cache, delete it to later
             * insert it, thus updating the usage order. 
             */
            this.del(key);
        } else if (this.cache.size >= this.max_size) {
            /*
             * If the cache size exceeds the max cache size, delete the 
             * first key-value pair, which is the 'least-recently used' item
             * in the cache.
             */
            this.del(this.cache.keys().next().value);
        }
        if (this.max_size > 0) {
            // Add the key-value pair to the cache if max cache size permits
            this.cache.set(key, value);
        }

    }

    /**
     * Return the value of key-value pair of given key.
     * 
     * @param  {*} key Key of value to return.
     * 
     * @return {*} Return the value of key-value pair.
     */
    get(key) {
        if (this.cache.has(key)) {
            /*
             * If the key exists in the cache, save the value, delete the key, 
             * and re-add the key-value pair back to the cache (updating the use 
             * order). Finally, return the value.
             */ 
            const value = this.cache.get(key);
            this.del(key);
            this.cache.set(key, value);
            return value;
        }
    }

    /**
     * Remove key-value pair of given key from the cache.
     * 
     * @param {*} key Key of key-value pair to remove.
     */
    del(key) {
        this.cache.delete(key);
    }

    /**
     * Remove all key-value pairs in the cache. 
     */
    reset() {
        this.cache.clear();
    }

    /**
     * Used for testing. Returns the Map object
     * 
     * @returns {Object} Return the Map object
     */
    get_cache() {
        return this.cache;
    }
}

module.exports = LRUCache;