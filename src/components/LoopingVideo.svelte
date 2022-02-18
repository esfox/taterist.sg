<script>
  import { onMount } from 'svelte';

  export let src;

  /** @type {HTMLVideoElement} */
  let video;

  onMount(() => video.play());
</script>

<video bind:this={video} {src} class={$$props.class} autoplay loop muted>
  <track kind="captions" />
</video>
