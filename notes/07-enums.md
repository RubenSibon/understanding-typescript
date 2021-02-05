# Enums

Enums are a powerful tool that allow you to have:

- Identifiers that are human-readable;
- And that have some mapped value behind the scenes.

```ts
enum NameToId { ALEX, DENNIS, ROBIN };

const loggedInUsers = allUsers[NameToId.ALEX]; // 0


enum Colors { RED = "#F00", GREEN = "#0F0", BLUE = "#00F" };

const hexGreen = Colors.GREEN;
```
