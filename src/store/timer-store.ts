import {readable} from "svelte/store";

let count = 0;

export const timer = readable(count, (set) => {
  const int = setInterval(() => {
    count++;
    set(count);
  }, 1000);
  //desctructor funkcija
  return () => {
    clearInterval(int);
  }
});