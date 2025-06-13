import { createStore, createEffect } from "./store/index.js";

const store = createStore({
  count: 0,
  name: "Ved",
});

createEffect(() => {
  console.log("Count is:", store.count.get());
});

store.count.set(1);
store.count.set(2);
