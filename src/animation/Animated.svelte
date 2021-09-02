<script lang="ts">
  import {writable} from "svelte/store";
  import {tweened} from "svelte/motion";
  import {bounceOut} from "svelte/easing";
  import {fly, fade} from 'svelte/transition';
  import {flip} from "svelte/animate";

  const progress = tweened(0, {
    delay: 0,
    duration: 1000,
    easing: bounceOut
  });

  setTimeout(() => {
    progress.set(0.5);
  }, 2000);

  //---tranizicije

  let box = ['a','b']

  let vrij : string = '';
  const dodaj = () => {
    box = [...box, vrij]
  }

  function mici(vrij){
    console.log(vrij);
    box = box.filter(e => e !== vrij);
  }
</script>

<div class="dd">
  <progress value="{$progress}"></progress>

  {#each box as b}
    <!-- outrostart outroend -->
    <p in:fade out:fly></p> <!-- ne moze da revertuje animaciju u sred izvodjenja nego se prekine na pola -->
    <div transition:fly|local={{x: 200, y:0, duration: 3000}} on:click={() => mici(b)}
         on:introstart={() => console.log('startsin')}
         on:introend={() => console.log("introend")}
         animate:flip={{duration:300}}
         class="boxd">{b}</div>
    <!-- flip krajnja stavka da se spusti dolje -->
  {/each}
  <input type="text" bind:value="{vrij}">
  <button on:click={dodaj}>DODAJ</button>
</div>

<style lang="scss">
.boxd{
  width: 100px;
  height: 100px;
  background-color: gray;
  border: 1px solid black;
}
</style>
