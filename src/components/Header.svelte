<script>
  import classNames from 'classnames';

  import InstagramLink from './InstagramLink.svelte';
  import DropdownMenu from './DropdownMenu.svelte';

  const navItems = [
    {
      link: '#menu',
      label: 'MENU',
    },
    {
      link: '#about',
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

<header class="w-full h-20 fixed bg-secondary text-white flex items-center px-4 z-50">
  <nav class="flex-1">
    <DropdownMenu>
      <button
        slot="toggle"
        let:onClick
        let:toggleClass
        class={classNames(
          'material-icons menu-toggle md:(hidden) !text-4xl select-none p-2 hover:bg-hover-light',
          toggleClass
        )}
        on:click={onClick}
      >
        menu
      </button>
      <ul class="bg-white text-secondary">
        {#each navItems as { link, label }}
          <a href={link}>
            <li class="hover:bg-hover-dark p-3" role="button">{label}</li>
          </a>
        {/each}
      </ul>
    </DropdownMenu>
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
