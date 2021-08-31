<script lang="ts">
  import ContactCard from "./ContactCard.svelte";
  import Slotted from "./Slotted.svelte";
  import {tick} from "svelte";

  let name: string = 'world';
  let age: number = 33;
  let done: boolean = false;
  let noChange: string;
  let lista = ['a', 'b'];
  let tekst = "asdas";

  let izSlota: boolean;

  interface zapis {
    a: string;
    b: number;
  }

  let sve: zapis = {a: "dd", b: 1}

  $: uppercaseName = name.toUpperCase();

  $: console.log(name);

  let toUpperName = () => {
    return name.toUpperCase();
  }

  let incAge = () => {
    age += 1;
  }

  let changeName = (n: string) => {
    name = 'maxim';
  }

  let addContact = () => {
    lista = [...lista, name]
    noChange = uppercaseName;
    done = !done;
  }

  let printConsole = () => {
    console.log("asdsad");
  }

  let stampajBzvz = (event) => {
    console.log(event);
  }

  let odradi = (event) => {
    if(event.which != 9){
      return;
    }
    event.preventDefault();
    const ss = event.target.selectionStart;
    const se = event.target.selectionEnd;
    const value = event.target.value;

    tekst = value.slice(0,ss) + value.slice(ss, se).toUpperCase() + value.slice(se);

    tick().then(() => {
      //izvrsava se kada se updateuje tekst kao microtask koji resolvujemo sa ovim promisom
      event.target.selectionStart = ss;
      event.target.selectionEnd = se;
    });
  }
</script>

<main>
  <h1>Hello {uppercaseName}!</h1>
  <h1>Hello {toUpperName()}!</h1>
  <p>my age is {age}</p>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build
    Svelte apps.</p>
  <button on:click|once={incAge}>Change age</button>
  <button on:click={changeName}>Change name</button>
  <input type="text" bind:value={name}>

  <button on:click={addContact}>Add card</button>

  <form on:submit|preventDefault="{toUpperName}">
    <input value="{sve.a}">
    <input value="{sve.b}">
  </form>

  {#if done}
    <!-- on:input will modify this name on input (execute this inline function) -->
    <ContactCard userName="{name}" jobTitle="{noChange}" funkc="{printConsole}" on:bezveze="{stampajBzvz}" on:input={event => (name = event.target.value)}/>
  {:else if !done}
    <div>NOT DAN</div>
  {/if}

  {#each lista as l, index (l)} <!-- l in the end is key that should be unique -->
    <div>{l} and {index}</div>
  {:else}
    <div>EMPTYY</div>
  {/each}

  <div><span>{sve.a}</span></div>

  <Slotted let:zadef={zdf}>
    <h1>assd za def je {zdf}</h1>
    <h2 slot="moje"  let:slozeno={moraLokalnoImeNovo}>asdasd  {moraLokalnoImeNovo}</h2>
    <h3>ds</h3>
  </Slotted>

  <Slotted>
    <h2>OK</h2>
  </Slotted>



  <textarea rows="5" value="{tekst}" on:keydown={odradi}></textarea>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;

    h1 {
      color: blue;
      text-transform: none;
      font-size: 4em;
      font-weight: 100;
    }

    button {
      color: red;
      background-color: blueviolet;
      border: none;
      padding: 10px;
    }

    @media (min-width: 640px) {
      max-width: none;
    }
  }
</style>
