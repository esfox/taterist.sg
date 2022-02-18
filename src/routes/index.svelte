<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    const response = await fetch('menu.json');
    if (response.ok)
      return {
        props: {
          menu: await response.json(),
        },
      };
    if (response.status === 404) return { status: 404 };
    return {
      status: response.status,
    };
  }
</script>

<script>
  import Hero from '../components/Hero.svelte';
  import Menu from '../components/Menu.svelte';
  import About from '../components/About.svelte';

  export let menu;
</script>

<svelte:head>
  <title>taterist.sg</title>
</svelte:head>

<Hero />
<Menu class="pt-6 pb-12" {menu} />
<About />
