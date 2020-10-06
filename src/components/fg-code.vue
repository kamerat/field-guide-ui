<template>
  <div class="fg-code">
    <pre v-highlightjs="code"><code class="xml"></code></pre>
  </div>
</template>

<script>
import 'highlight.js/styles/default.css';

export default {
  name: 'fg-code',
  props: {
    code: String,
  },
};
</script>

<style scoped>
.fg-code {
  border-width: 2px;
  border-style: solid;
  padding: 0px 10px;
  background-color: #eee;
}
</style>
