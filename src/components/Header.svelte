<script>
  import InstagramLink from './InstagramLink.svelte';

  const navItems = [
    {
      link: '#menu',
      label: 'MENU',
    },
    {
      link: '#',
      label: 'ABOUT',
    },
    {
      link: '#',
      label: 'FAQ',
    },
    {
      link: '#contact',
      label: 'CONTACT',
    },
  ];
</script>

<header class="w-full h-20 fixed bg-secondary text-white flex items-center  px-4 z-50">
  <nav class="flex-1">
    <button
      class="material-icons flex-1 md:(hidden) !text-4xl select-none p-2 hover:bg-hover-light"
    >
      menu
    </button>
    <ul class="flex <md:(hidden)">
      {#each navItems as { link, label }}
        <a href={link}>
          <li class="hover:bg-hover-light p-3" role="button">{label}</li>
        </a>
      {/each}
    </ul>
  </nav>
  <h2 class="text-primary">TATERIST</h2>
  <div class="flex-1 flex justify-end">
    <InstagramLink>
      <button
        class="material-icons !grid place-items-center!text-4xl select-none p-2 hover:bg-hover-light"
      >
        <img src="/images/instagram-logo-white.svg" alt="instagram-logo" class="w-8 h-8" />
      </button>
    </InstagramLink>
  </div>
</header>
