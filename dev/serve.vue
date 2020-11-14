<script>
import Vue from 'vue';
import GoogleStaticMap from '@/vue-google-static-maps.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    GoogleStaticMap
  }
});
</script>

<template>
  <div id="app">
    <GoogleStaticMap api-key="key" alt="Testing ..."/>
  </div>
</template>
