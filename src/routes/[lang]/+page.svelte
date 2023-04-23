<script lang="ts">
  import type { Language } from '$lib/i18n';
  import LanguageSwitcher from '$lib/layout/LanguageSwitcher.svelte';

  const supportedLanguages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'kk', name: 'Qazaq', disabled: false },
    { code: 'de', name: 'Deutsch', disabled: false },
  ];

</script>

<LanguageSwitcher languages={supportedLanguages}/>

<h1>@ardaqs/svelte-ui</h1>
