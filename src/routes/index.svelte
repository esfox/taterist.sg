<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch, url }) {
    const response = await fetch('menu.json');
    if (response.ok)
      return {
        props: {
          menu: await response.json(),
          baseUrl: url.origin,
        },
      };
    if (response.status === 404) return { status: 404 };
    return {
      status: response.status,
    };
  }
</script>

<script>
  import Hero from '../components/views/Hero.svelte';
  import Menu from '../components/views/Menu.svelte';
  import About from '../components/views/About.svelte';

  export let menu;
  export let baseUrl;
</script>

<svelte:head>
  <title>taterist.sg</title>
  <meta name="description" content="get Baked." />

  <meta property="og:title" content="taterist.sg" />
  <meta property="og:description" content="get Baked." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={baseUrl} />
  <meta property="og:image" content={`${baseUrl}/images/logo.jpg`} />

  <meta property="twitter:card" content="summar" />
  <meta property="twitter:title" content="taterist.sg" />
  <meta property="twitter:description" content="get Baked." />
  <meta property="twitter:url" content={baseUrl} />
  <meta property="twitter:image" content={`${baseUrl}/images/logo.jpg`} />
</svelte:head>

<Hero />
<Menu class="pt-6 pb-12" {menu} />
<About />
