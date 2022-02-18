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
<section class={$$props.class}>
  <h2 class="text-center">MENU</h2>
  {#if menu}
    <div class="max-w-screen-xl flex flex-wrap justify-center gap-10 px-8 md:px-12 pt-6 mx-auto">
      {#each menu as { mediaUrl, mediaType }}
        <div class="relative">
          {#if mediaType === 'image'}
            <img
              src={`/images/food/${mediaUrl}`}
              alt="menu item"
              class={`md:(w-[${imageSize}] h-[${imageSize}]) object-cover`}
            />
          {:else if mediaType === 'video'}
            <video
              src={`/images/food/${mediaUrl}`}
              class={`md:(w-[${imageSize}] h-[${imageSize}])`}
              autoplay
              loop
            >
              <track kind="captions" />
            </video>
          {/if}
          <Button class="absolute right-0 bottom-0 m-3" on:click={order}>ORDER</Button>
        </div>
      {/each}
    </div>
  {/if}
</section>
