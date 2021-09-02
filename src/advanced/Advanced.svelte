<script lang="ts">
  import Product from "./Product.svelte";
  import CartItem from "./CartItem.svelte";
  import RekurzivniCvor from "./RekurzivniCvor.svelte";
  import ExecScriptOnce from "./ExecScriptOnce.svelte";

  let renderedComp = Product;
  let showProduct = true;

  let toggle = () => {
    showProduct = !showProduct;
    if (renderedComp === Product) {
      renderedComp = CartItem;
    } else {
      renderedComp = Product;
    }
  }

  let family = [
    {
      isParent: true,
      name: 'Misko',
      children: [
        {
          isParent: true,
          name: 'Da',
          children: [
            {
              isParent: false,
              name: 'Krcko'
            }
          ]
        }
      ]
    },
    {
      isParent: true,
      name: 'Ana',
      children: []
    },
  ];

  let y;
  $: console.log(y);

  let currentTitle = 'MOJ APP';

  const swithcIt = () => {
    currentTitle = "asd";
  }

</script>

<div class="dd">

  <ExecScriptOnce />
  <ExecScriptOnce />
  <ExecScriptOnce />
  <ExecScriptOnce />

<button on:click={toggle}>TOGL</button>

  {#each family as f}
    <RekurzivniCvor member={f} />
    {/each}

  <svelte:component this={renderedComp} title="Test" id="p1"/>



  <!--{#if showProduct}-->
  <!--  &lt;!&ndash; dinamicki kreira komponentu na osnovu imena &ndash;&gt;-->
  <!--  <svelte:component this={renderedComp} title="Test" id="p1"/>-->
  <!--  {:else}-->
  <!--  <CartItem title="asd" id="p2" />-->
  <!--  {/if}-->
</div>

<svelte:window bind:scrollY={y} />
<svelte:body on:mouseenter={() => console.log("ENTER")} />
<svelte:head>
  <title>{currentTitle}</title>
</svelte:head>

<button on:click={swithcIt}>SWITCH TITLE DYNAMIC</button>

<style lang="scss">

</style>
