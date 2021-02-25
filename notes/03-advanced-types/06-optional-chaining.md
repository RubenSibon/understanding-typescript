# Optional chaining

Use optional chaining if you cannot be certain that an object has certain properties.

Add `?` after the uncertain properties.

```ts
const fetchedUserData = {
  id: "u1",
  name: "Ruben",
  job: {
    title: "CEO",
    desc: "My own company.",
  },
}

// Secure way to avoid runtime errors:
console.log(fetchedUserData.job && fetchedUserData.job.title);

// TS alternative:
console.log(fetchedUserData?.job?.title);
```
