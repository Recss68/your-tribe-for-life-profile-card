<script>
  // import favicon from "/img/logo.png";

  let { children } = $props();
</script>

<svelte:head>
  <!-- <link rel="icon" href={favicon} /> -->
</svelte:head>

<main>
  {@render children?.()}
</main>