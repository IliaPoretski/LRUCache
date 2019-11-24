const LRUCache = require('./LRUCache.js')

// Create an LRUCache with max size 3
let lru = new LRUCache(3);

// Insert key-value pairs into cache
lru.put('a', 1)
lru.put('b', 2)
lru.put('c', 3)
console.log(lru.get_cache(),'\n')

// Get value of key 'a' from cache
console.log(lru.get('a'))
console.log(lru.get_cache(),'\n')

// Insert another key-value pair, exceeding cache max size
lru.put('d', 4)
console.log(lru.get_cache(),'\n')

// Remove key-value pair
lru.del('c')
console.log(lru.get('c'))
console.log(lru.get_cache(),'\n')

// Update value of key-value pair
lru.put('d', 5)
console.log(lru.get_cache(),'\n')

// Remove all key value pairs
lru.reset()
console.log(lru.get_cache())

