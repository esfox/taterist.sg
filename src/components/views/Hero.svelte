<script>
  import CenteredSection from '../CenteredSection.svelte';
</script>

<CenteredSection class="hero h-[240px] md:h-[348px] text-white">
  <span slot="heading">GET BAKED.</span>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius est vitae efficitur eleifend.
  Nam tincidunt consectetur luctus.
</CenteredSection>

<style>
  :global(.hero) {
    background: linear-gradient(var(--color-bg-overlay-dark), var(--color-bg-overlay-dark)),
      url('/images/hero-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
