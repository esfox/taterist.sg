<script>
  import { onMount } from 'svelte';

  import Button from '../components/Button.svelte';

  let menu;
  let imageSize = '360px';

  onMount(async () => {
    try {
      const response = await fetch('menu.json');
      menu = await response.json();
    } catch (error) {
      console.error(error);
    }
  });

  function order() {
    alert('Work in progress');
  }
</script>

<!-- Anchor for #menu -->
<div id="menu" class="relative top-[-5rem]" />
<h2 class="text-center py-6">MENU</h2>
{#if menu}
  <section class="max-w-screen-xl flex flex-wrap justify-center gap-10 px-8 md:px-12 pb-24 mx-auto">
    {#each menu as { mediaUrl, mediaType }}
      {#if mediaType === 'image'}
        <div class="relative">
          <img
            src={`/images/food/${mediaUrl}`}
            alt="menu item"
            class={`md:(w-[${imageSize}] h-[${imageSize}]) object-cover`}
          />
          <Button class="absolute right-0 bottom-0 m-3" on:click={order}>ORDER</Button>
        </div>
      {:else if mediaType === 'video'}
        <div class="relative">
          <video
            src={`/images/food/${mediaUrl}`}
            class={`md:(w-[${imageSize}] h-[${imageSize}])`}
            autoplay
            loop
          >
            <track kind="captions" />
          </video>
          <Button class="absolute right-0 bottom-0 m-3" on:click={order}>ORDER</Button>
        </div>
      {/if}
    {/each}
  </section>
{/if}
