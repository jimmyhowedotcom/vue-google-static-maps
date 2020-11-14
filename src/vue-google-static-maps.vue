<script>

import toQueryString from "@/to-query-string";

export default {

  name: "GoogleStaticMap",

  props: {
    apiKey: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: "Google Static Image"
    }
  },

  data()
  {
    return {
      parameters: {
        center: "G20 9TA",
        size: "300x300",
        scale: 2
      }
    }
  },

  computed: {

    source()
    {
      let parameters = Object.assign(this.parameters, {key: this.apiKey});

      return "https://maps.googleapis.com/maps/api/staticmap?" + toQueryString(parameters);
    }

  }

}
</script>

<template>

  <div class="GoogleStaticMap">

    <img :alt="alt" :src="source">

  </div>

</template>

<style scoped>
.vue-google-static-maps {

  /* styles */

}
</style>
