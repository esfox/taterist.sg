<script>
  import CenteredSection from './CenteredSection.svelte';
</script>

<div id="about" class="relative top-[-5rem]" />
<CenteredSection class="about h-[240px] md:h-[300px] text-white">
  <span slot="heading">ABOUT</span>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius est vitae efficitur eleifend.
  Nam tincidunt consectetur luctus.
</CenteredSection>

<style>
  :global(.about) {
    background: linear-gradient(var(--color-bg-overlay-dark), var(--color-bg-overlay-dark)),
      url('/images/about-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
