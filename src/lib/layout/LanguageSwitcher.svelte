<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  
  import { languages as defaultLanguages } from '$lib/i18n';

  export let languages = defaultLanguages;

  $: lang = $page.params.lang;

  function switchLanguage(newLang: string) {
    const path = $page.url.pathname;
    // console.log(`Curr path: ${path}`);

    const langRegExp = new RegExp(`^${base}/${lang}($|/)`);

    const newPath = path.replace(langRegExp, (match) => {
      // console.log(`Match: ${match}`);
      let newValue = `${base}/${newLang}`;
      if (match.endsWith('/')) {
        newValue += '/';
      }
      return newValue;
    });

    window.localStorage.setItem('lang', newLang);

    // console.log(`Goto path: ${newPath}`)
    goto(newPath);
  }
</script>

<div>
  {#each languages as language }
    {#if !language.disabled}
      <button disabled={language.code===lang} on:click={ () => switchLanguage(language.code) }>{language.name}</button>
    {/if}
  {/each}
</div>

<style>
  button {
    border: none;
    background: none;
    padding: 6px;
    font-size: small;
    cursor: pointer;
    display: inline-block;
  }
  button:hover {
    background: #eee;
  }
  button:hover:disabled {
    background: none;
    cursor: default;
  }
</style>
