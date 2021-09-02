<script lang="ts">
  export let member;
</script>

<div class="dd">
  <h1>{member.name}</h1>
  <div>
    <p>-----></p>
    {#if member.isParent}
    {#each member.children as f}
      <!-- REKURZIVNO RENEDERUJE SAM SEBE -->
      <svelte:self member={f} />
    {/each}
      {/if}
  </div>
</div>

<style lang="scss">

</style>
