<script>
  import Button from '../Button.svelte';
  import LoopingVideo from '../LoopingVideo.svelte';

  export let menu;

  function order() {
    alert('Work in progress');
  }
</script>

<!-- Anchor for #menu -->
<div id="menu" class="relative top-[-5rem]" />
<section class={$$props.class}>
  <h2 class="text-center">MENU</h2>
  {#if menu}
    <div class="max-w-screen-xl flex flex-wrap justify-center gap-10 px-8 md:px-12 pt-6 mx-auto">
      {#each menu as { mediaUrl, mediaType }}
        <div class="relative" style="--media-size: 360px">
          {#if mediaType === 'image'}
            <img
              src={`/images/food/${mediaUrl}`}
              alt="menu item"
              class={`sm:(w-[var(--media-size)] h-[var(--media-size)]) object-cover`}
            />
          {:else if mediaType === 'video'}
            <LoopingVideo
              src={`/images/food/${mediaUrl}`}
              class={`sm:(w-[var(--media-size)] h-[var(--media-size)])`}
            />
          {/if}
          <Button class="absolute right-0 bottom-0 m-3" on:click={order}>ORDER</Button>
        </div>
      {/each}
    </div>
  {/if}
</section>
