<script>
  import InstagramLink from './InstagramLink.svelte';

  const currentYear = new Date().getFullYear();

  const navItems = [
    {
      link: '#menu',
      label: 'MENU',
    },
    {
      link: '#',
      label: 'FAQ',
    },
  ];
</script>

<!-- Anchor for #contact -->
<div id="contact" class="relative top-[-5rem]" />
<footer class="bg-primary">
  <div class="md:(flex items-center border-b border-primary-dark px-8 py-6)">
    <h2 class="flex-1 <md:(flex justify-center border-b border-primary-dark px-8 py-6)">
      TATERIST
    </h2>
    <ul class="flex-1 flex justify-center <md:(py-4)">
      {#each navItems as { link, label }}
        <a href={link}>
          <li class="hover:bg-hover-dark p-3" role="button">{label}</li>
        </a>
      {/each}
    </ul>
    <div class="flex-1 text-right <md:(text-center py-4)">
      <h4>CONTACT</h4>
      <div>+1234567890</div>
    </div>
  </div>
  <div class="p-4 md:(flex items-center)">
    <div class="flex-1" />
    <div class="flex-1 flex justify-center items-center font-semibold <md:(py-4)">
      Follow us on
      <InstagramLink class="flex items-center">
        <span class="px-1.5">
          <img src="/images/instagram-logo-black.svg" alt="instagram-logo" class="w-7 h-7 inline" />
        </span>
        <span class="underlined">Instagram</span>
      </InstagramLink>
    </div>
    <div class="flex-1 text-sm text-right <md:(text-center pt-4)">
      ©{currentYear} Taterist
    </div>
  </div>
</footer>

<style>
  .underlined {
    box-shadow: 0 2px 0 0 black;
  }
</style>
