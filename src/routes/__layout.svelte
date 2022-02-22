<script>
  import 'virtual:windi.css';
  import '../styles/global.css';

  import Header from '../components/views/Header.svelte';
  import Footer from '../components/views/Footer.svelte';
</script>

<div class="grid grid-rows-[auto,1fr,auto] h-full">
  <Header />
  <main class="mt-[var(--header-height)]">
    <slot />
  </main>
  <Footer />
</div>
