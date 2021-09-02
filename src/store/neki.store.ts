import {writable} from "svelte/store";

const mojstor = writable([
  {
    ime: "a"
  },
  {
    ime: "b"
  }
]);

const napravi = {
  subscribe : mojstor.subscribe,
  dodajIme: (ime) => {
    mojstor.update((itm) => {
      return [...itm, ime];
    });
  }
}

export default napravi;