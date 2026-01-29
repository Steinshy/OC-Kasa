import { lru } from 'tiny-lru';

const cache = lru(100, 300000);

export const getCached = (key) => {
  return cache.get(key);
};

export const setCached = (key, value) => {
  cache.set(key, value);
};

export const clearCache = () => {
  cache.clear();
};

export default cache;
