<script lang="ts">
  import { _, locale, isLoading } from 'svelte-i18n';
  import { browser } from '$app/environment';
  import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

  import { initI18n } from '$lib/i18n';

  // import './global.css';
  // import './global.scss';

  // export const prerender = true;

  let rootPath = false;

  beforeNavigate(({ from, to }) => {
    // console.log(`beforeNavigate from ${from.pathname} to ${to?.pathname}`);
  });

  afterNavigate(({ from, to }) => {
    // console.log(`afterNavigate from ${from?.pathname} to ${to.pathname}`);

    initI18n();

    rootPath = to?.url.pathname === '/';
    if (browser && rootPath) {
      // console.log(`Redirecting to /${$locale}`);
      goto(`/${$locale}`);
    }
  });
</script>

<svelte:head>
  <title>OYn</title>
</svelte:head>

{#if $isLoading}
  <p style="margin: 1em; color: gray;">Loading...</p>
{:else}
  <slot/>
{/if}

<style>
</style>
