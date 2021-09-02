<script lang="ts">
  import mojstor from "./neki.store";
  import {timer} from "./timer-store";

  const stampa = () => {
    const uns = mojstor.subscribe(s => {
      console.log(s);
    });
    uns();
  }

  $: timer.subscribe(c => {
    console.log(c);
  })

</script>

<div class="dd">
  <button name="cisti" on:click={stampa}>STAMPA</button>
  <span>{$timer}</span>
</div>

<style lang="scss">

</style>
