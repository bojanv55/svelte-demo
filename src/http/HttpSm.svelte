<script lang="ts">
  import {onMount} from "svelte";

  let h = [];
  let hi : HTMLInputElement;
  let isLoading = false;

  onMount(() => {
    isLoading = true;
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      isLoading = false;
      if(!res.ok){
        throw new Error('FAILED!');
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      let niz = [];
      for(let i=0; i<data.length; i++){
        niz.push(data[i].id);
      }
      h = niz;
    })
    .catch(err => {
      console.log(err);
    })
  })
  //OVO ILIII
  const dajnesto = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    isLoading = false;
    if(!res.ok){
      throw new Error('FAILED!');
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    let niz = [];
    for(let i=0; i<data.length; i++){
      niz.push(data[i].id);
    }
    h = niz;
    return h;
  })
  .catch(err => {
    console.log(err);
  });

  const dodajH = () => {
    h = [...h, hi.value]

    isLoading = true;
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        "userId": 847,
        "id": 15,
        "title": "AKO",
        "body": "NESTO"
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      isLoading = false;
      if(!res.ok){
        throw new Error('FAILED!');
      }
    }).catch(err => {
      console.log(err);
    });
  }

</script>

<div class="dd">
  {#if isLoading}
    <div>LOADING!!</div>
    {/if}
  <label for="h">Hby</label>
  <input type="text" id="h" bind:this={hi}>
  <button on:click={dodajH}>KLIKMI</button>

  <ul>
    {#each h as h1}
      <li>{h1}</li>
      {/each}
  </ul>

  <!-- SAMO ZA LOAD DATA, NE DOZVOLJAVA POSLIJE DA SE DODAJU STVARI U dataz niz -->
  {#await dajnesto}
    <p>UCITAVA SE</p>
    {:then dataz}
        <ul>
          {#each dataz as d}
            <li>{d}</li>
            {/each}
        </ul>
    {:catch error}
      <p>{error.message}</p>
    {/await}
</div>

<style lang="scss">

</style>
