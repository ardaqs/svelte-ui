<script lang="ts">
  import Footer from "$lib/layout/Footer.svelte";
</script>

<div class="page">
  <!-- <TopPanel/> -->
  <h1>Top panel</h1>
  <div class="page-scrollable-wrapper stretched">
    <div class="page-scrollable-content">
      <main class="stretched padded">
        <slot/>
      </main>
      <Footer>
        <span slot="copyright">Ardak Saduakassov</span>
      </Footer>
    </div>
  </div>
</div>
