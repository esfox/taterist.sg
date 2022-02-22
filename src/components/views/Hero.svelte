<script>
  import Button from '../Button.svelte';

  const scrollToMenu = () => document.getElementById('menu').scrollIntoView();
</script>

<section
  class="hero text-white flex flex-col justify-end items-start <md:(px-8 py-16) md:p-16 2xl:(px-32 py-24)"
>
  <h1 class="text-6xl md:text-8xl 2xl:text-9xl">GET BAKED.</h1>
  <p class="max-w-[500px] text-md md:text-lg mt-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius est vitae efficitur
    eleifend. Nam tincidunt consectetur luctus.
  </p>
  <Button class="px-12 mt-6" on:click={scrollToMenu}>SEE MENU</Button>
</section>

<style>
  .hero {
    height: calc(100vh - var(--header-height));
    background: linear-gradient(var(--color-bg-overlay-dark), var(--color-bg-overlay-dark)),
      url('/images/hero-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
