# Type casting

Inform TS that the element is of a specific type by adding it in angular brackets before the DOM query.

You may also inform TS that the element certainly exists with "!" at the end

```ts
const inputElement = <HTMLInputElement>document.querySelector("#someElement")!;

inputElement.value = "Hello world!";
```

Alternative for situations where angular brackets clash (such as JSX).

```ts
const inputElement = document.querySelector("#someElement")! as HTMLInputElement;

inputElement.value = "Hello world!";
```

Of course it is your job to ensure that the specific element actually exists and is of the type you have casted. Else you get a runtime error.

To prevent runtime errors you may also wrap the code in an if-block:

```ts
const inputElement = document.querySelector("#someElement"); // type/value: HTMLElement | null

if (inputElement) {
  // Note the parentheses to ensure that the type is evaluated first.
  (inputElement as HTMLInputElement).value = "Hello world!";
}
```
