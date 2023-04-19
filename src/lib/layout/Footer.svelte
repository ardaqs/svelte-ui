<script lang="ts">
  $: currYear = (new Date()).getFullYear().toString();
</script>

<footer>
  <section class="centered copyright">
    <p>© {currYear}&nbsp;&nbsp;<slot name="copyright"/></p>
  </section>
</footer>

<style>
  section.centered {
    text-align: center;
    vertical-align: middle;
  }
  section.copyright p {
    margin: 0.5rem;
    font-size: small;
  }
</style>
