<script lang="ts">
  import mojstor from "./neki.store";
  import {onDestroy} from "svelte";

  let itms = [];

  const unsubscribe = mojstor.subscribe(items => {
    itms = items;
    console.log(items);
  });

  onDestroy(() => {
    if(unsubscribe) {
      unsubscribe();
    }
  });

</script>

<div class="store">
  {#each $mojstor as i} <!-- $mojstor se automatski subscribeuje a i unsubsrcribeovace se -->
    <div>{i.ime}</div>
    {/each}
</div>

<style lang="scss">

</style>
