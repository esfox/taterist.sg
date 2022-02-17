<script>
  import InstagramLink from './InstagramLink.svelte';
</script>

<header class="h-20 bg-secondary text-white flex items-center px-4">
  <div class="flex-1 md:(hidden)">
    <button class="material-icons !text-4xl select-none p-2 hover:bg-hover-light"> menu </button>
  </div>
  <ul class="flex-1 flex <md:(hidden)">
    <a href="/" rel="noreferrer noopener">
      <li class="hover:bg-hover-light p-3" role="button">MENU</li>
    </a>
    <a href="/" rel="noreferrer noopener">
      <li class="hover:bg-hover-light p-3" role="button">ABOUT</li>
    </a>
    <a href="/" rel="noreferrer noopener">
      <li class="hover:bg-hover-light p-3" role="button">FAQ</li>
    </a>
    <a href="/" rel="noreferrer noopener">
      <li class="hover:bg-hover-light p-3" role="button">CONTACT</li>
    </a>
  </ul>
  <h1 class="flex-grow grid place-items-center text-3xl text-primary font-bold">TATERIST</h1>
  <div class="flex-1 flex justify-end">
    <InstagramLink>
      <button
        class="material-icons !grid place-items-center!text-4xl select-none p-2 hover:bg-hover-light"
      >
        <img src="/images/instagram-logo-white.svg" alt="instagram-logo" width="32" height="32" />
      </button>
    </InstagramLink>
  </div>
</header>
