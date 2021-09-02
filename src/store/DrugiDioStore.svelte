<script lang="ts">
  import mojstor from "./neki.store";

  function brisiStor() {
    //mojstor.set([]);
    // mojstor.update(it => {
    //   //mora da se doda novi uvijek
    //   return [...it, {ime:"asdas"}];
    // });
    //
    mojstor.dodajIme({ime:"asdas"});
  }
</script>

<div class="dd">
  <button name="cisti" on:click={brisiStor}>CISTI</button>
</div>

<style lang="scss">

</style>
