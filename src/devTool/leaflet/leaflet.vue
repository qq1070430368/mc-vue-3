<template>
  <div id="container" class="el-height-full">
     <mc-leaf-maps></mc-leaf-maps>
  </div>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
</template>

<script>
// @ is an alias to /src
import mcLeafMaps from '@/components/Leafmaps/leafmaps.vue';
export default {
  name: 'leaflet',
  data () {
    return {};
  },
  components: {
    mcLeafMaps
  },
  methods: {},
  mounted () {
    console.log(this.$store.state.setting);
  }
};
</script>
<style>
</style>
