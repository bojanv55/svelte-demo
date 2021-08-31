<script lang="ts">
  import {createEventDispatcher} from "svelte";

  export let userName : string;
  export let jobTitle : string = 'dd';
  export let funkc : () => void;

  const dispatch = createEventDispatcher();

  export function nesto() {
    //emituje event koji u ocu moze da se kapcruje sa on:bezveze="{stampajBzvz}" na komponenti
    dispatch('bezveze', {id:'2222'});
  }
</script>

<div>
  <header>
    <div class="{jobTitle==='dfdf' ? 'thumb' : 'thumb thumb-plc'}">
<!--    <div class="thumb" class:thumb-plc={jobTitle!=='dfdf'}>-->
      <img src="" alt="asdas">
    </div>
    <div>
      <h1>User Name</h1>
      <h2>Job Title</h2>
    </div>
    <div class="user-data">
      <h1>{userName}</h1>
      <h2>{@html jobTitle}</h2> <!-- treat as html -->
    </div>
    <input value="{userName}" on:input>
    <button on:click={funkc}>KONZOLA</button>
    <button on:click={nesto}>KONZOLA2</button>
  </header>
</div>

<style lang="scss">
  .thumb{
    background-color: gray;

    &-plc{
      background-color: red;
    }
  }

  div {
    div{
      border: 1px solid black;
    }

    h1{
      color:yellow;
    }
  }
</style>
