# Keyof

With `keyof` you can check if a key exists on an object type.

```ts
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}
```
