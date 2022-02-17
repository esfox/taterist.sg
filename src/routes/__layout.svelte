<script>
  import 'virtual:windi.css';
  import '../styles/global.css';

  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div class="grid grid-rows-[auto,1fr,auto] h-full">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
