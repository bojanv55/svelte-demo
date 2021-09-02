<script lang="ts">
  export let val:string = "";
  let price : number;
  let agreed : boolean;

  $: console.log(price);
  $: console.log(agreed);

  let referencaNaEl : HTMLInputElement;
  let sejv = () => {
    console.log(referencaNaEl.value);
    console.log(referencaNaEl.classList.values())
  }
</script>

<div class="forma">
  <form on:submit|preventDefault>
    <input type="number" bind:value="{price}" on:input={e => console.log(1 + e.target.value)}>
    <input type="text" bind:value="{val}">
    <input type="button" value="sssd">
    <span>{val}</span>
    <label>
    <input type="checkbox" bind:checked={agreed} />
      Agree?
    </label>
    <input type="email" placeholder="username" id="username" bind:this={referencaNaEl}>
    <button on:click={sejv}>Neko dugme</button>
  </form>
</div>


<style lang="scss">
</style>
