# Index properties

Example of an interface that does not specify specific properties and types,
but that specifies that any and all properties should be of type string as well as their values.

```ts
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid e-mail",
  username: "Must start with a capital character!",
  // error: 404 // not allowed!
  // 404: true // not allowed!
}
```
