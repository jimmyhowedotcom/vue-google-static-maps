<script>

import toQueryString from "@/to-query-string";

export default {

  name: "GoogleStaticMap",

  props: {
    apiKey: {
      type: String,
      required: true
    },
    center: {
      type: String,
      required: false,
      default: "G2 4JR"
    },
    size: {
      type: String,
      required: false,
      default: "300x300"
    },
    scale: {
      type: Number,
      default: 1
    }
  },

  data()
  {
    return {
      parameters: {}
    }
  },

  computed: {

    source()
    {
      let parameters = {
        key: this.apiKey,
        center: this.center,
        size: this.size,
        scale: this.scale,
      }

      return "https://maps.googleapis.com/maps/api/staticmap?" + toQueryString(parameters);
    }

  }

}
</script>

<template>

  <img :alt="alt" :src="source">

</template>

<style scoped>
.vue-google-static-maps {

  /* styles */

}
</style>
