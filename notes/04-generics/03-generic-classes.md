# Generic classes

With generic classes you can decide on types as the class is instanteated.

Generic classes give you more flexibility while still utilizing type constraints.

```ts
// It is a good idea to only allow primitives due to objects being passed by reference.
class DataStorage<T extends string | number> {
  private data: T[] = [];

  get getItems() {
    return [...this.data];
  }

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Ruben");
textStorage.addItem("Manu");
console.log(textStorage.getItems());
textStorage.addItem("Ruben");
console.log(textStorage.getItems());
```
