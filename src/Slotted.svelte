<script lang="ts">
  import {afterUpdate, onMount, tick} from "svelte";

  let izslotaalzadefault: boolean = true;
  let kontrolisiIzSlotDefinicije: boolean = false;

  //---CREATION
  //onMount
  //onDestroy

  onMount(() => {
    console.log("|Asdasd");
  });

  afterUpdate(() => {
    console.log(izslotaalzadefault);
  });

  //----UPDATE
  //beforeUpdate
  //afterUpdate
  //tick
</script>

<div class="backdrop"></div>
<div class="modal">
  <slot zadef={izslotaalzadefault} />
</div>
<div class="ispodSlot">
  <slot name="moje" slozeno={kontrolisiIzSlotDefinicije}> <!-- saljemo iznad  -->
    A OVO JE DEFAULTNOO AKO NEMA SLOT PROSLIJEDJEN I {kontrolisiIzSlotDefinicije}
  </slot>
</div>

<style lang="scss">
  .backdrop{
    color: red;
  }

  .modal{
    color:gray;
  }
</style>
