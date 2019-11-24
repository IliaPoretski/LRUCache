# LRUCache for Chisel AI coding challenge

## Files

#### `LRUCache.js`
File containing `LRUCache` class and implementation for LRUCache.

#### `LRUCacheUseExample.js`
File to show example uses of `LRUCache` functions.

## LRUCache Syntax
`new LRUCache(`_`max_size`_`)`

**Parameters**

_`max_size`_: A number indicating the maximum size of the cache

## LRUCache Functions
- `put(key, value)`

   Add a key-value pair with key: `key` and value: `value` to the cache.
 If the size of the cache exceed max cache size, remove least recently used key-value pair. If the key already exists, update the value.
 
- `get(key)`

   Returns the value of key-value pair of key: `key`.
     
- `del(key)`

   Removes the key-value pair of key: `key`.

- `reset()`

   Removes all key-value pair in the cache.
  
- `get_cache()`

   Returns all the key-value pairs in the cache in usage order.


## Setting up and running the code
Make sure that Node.js is installed on the machine, and the files listed above are downloaded and in the same directory.
### Running `LRUCacheUseExample.js`
1. Open a terminal window and navigate to the `LRUCache` folder.
3. Run the following command: `node LRUCacheUseExample.js`.
